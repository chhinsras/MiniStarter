using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;

#nullable disable

namespace API.Extensions;
public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
    {
        MapsterSettings.Configure();
        services.AddControllersWithViews();
        services.AddRazorPages();
        services
            .AddCorsPolicy()
            .AddAutoMapper(Assembly.GetExecutingAssembly())
            .AddSettings(configuration)
            .AddLocalization(configuration)
            .AddSwaggerDocumentation()
            .AddDependencyInjection(configuration)
            .AddDatabase(configuration)
            .AddPermissions(configuration)
            .AddIdentity(configuration);
        services.AddScoped<TokenService>();
        services.AddScoped<ExportService>();
        
        return services;
    }

    public static IServiceCollection AddSettings(this IServiceCollection services, IConfiguration configuration)
    {
        services
            .Configure<MiddlewareSettings>(configuration.GetSection(nameof(MiddlewareSettings)))
            .Configure<JwtSettings>(configuration.GetSection(nameof(JwtSettings)))
            .Configure<CorsSettings>(configuration.GetSection(nameof(CorsSettings)));
        return services;
    } 

    public static IServiceCollection AddCorsPolicy(this IServiceCollection services)
    {
        var corsSettings = services.GetOptions<CorsSettings>(nameof(CorsSettings));
        return services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                // policy.AllowAnyHeader().AllowAnyMethod().WithOrigins(corsSettings.Angular);
                // policy.AllowAnyHeader().AllowAnyMethod().WithOrigins(corsSettings.Flutter);
                policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
            });
        });
    }
    private static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
    {
        services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "Jwt auth header",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "oauth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header
                        },
                        new List<string>()
                    }
                });
            });
        return services;
    }
    private static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
    {
        var hostWithHeroku = true; // set to false if not hosting with heroku
        var databaseProvider = DatabaseProvider.MSSQL; // MSSQL, POSGRESSQL

        services.AddDbContext<DataContext>(options => {
            var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

            string connectionString = "";

            if (env == "Production" && hostWithHeroku){
                // Use connection string provided at runtime by Heroku.
                var connectionUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

                // Parse connection URL to connection string for Npgsql
                connectionUrl = connectionUrl.Replace("postgres://", string.Empty);
                var pgUserPass = connectionUrl.Split("@")[0];
                var pgHostPortDb = connectionUrl.Split("@")[1];
                var pgHostPort = pgHostPortDb.Split("/")[0];
                var pgDb = pgHostPortDb.Split("/")[1];
                var pgUser = pgUserPass.Split(":")[0];
                var pgPass = pgUserPass.Split(":")[1];
                var pgHost = pgHostPort.Split(":")[0];
                var pgPort = pgHostPort.Split(":")[1];

                connectionString = $"Server={pgHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb};SSL Mode=Require;TrustServerCertificate=True";
            } else
            {
                // Use connection string from file.
                connectionString = databaseProvider == DatabaseProvider.MSSQL ? configuration.GetConnectionString(DatabaseProvider.MSSQL) 
                    : configuration.GetConnectionString(DatabaseProvider.POSGRESSQL);
            }

            // Whether the connection string came from the local development configuration file
            // or from the environment variable from Heroku, use it to set up your DbContext.
            if(databaseProvider == DatabaseProvider.MSSQL) {
                options.UseSqlServer(connectionString);
            } else if (databaseProvider == DatabaseProvider.POSGRESSQL)
            {
                options.UseNpgsql(connectionString);
            }
        });

        using var scope = services.BuildServiceProvider().CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
        dbContext.Database.Migrate();
        return services;
    }
    public static IServiceCollection AddPermissions(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<IAuthorizationPolicyProvider, PermissionPolicyProvider>()
            .AddScoped<IAuthorizationHandler, PermissionAuthorizationHandler>();
        return services;
    }
    private static IServiceCollection AddIdentity(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddIdentityCore<User>(opt =>
        {
            opt.User.RequireUniqueEmail = true;
        })
            .AddRoles<Role>()
            .AddEntityFrameworkStores<DataContext>();
        var jwtSettings = services.GetOptions<JwtSettings>(nameof(JwtSettings));
        var key = Encoding.ASCII.GetBytes(jwtSettings.Key);
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt =>
            {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key)
                };
            });
        services.AddAuthorization();
        return services;
    }
    public static IServiceCollection AddDependencyInjection(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        services.AddScoped<ITemplateService, RazorViewsTemplateService>();
        var transientServiceType = typeof(ITransientService);
        var servicetypes = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => transientServiceType.IsAssignableFrom(p))
            .Where(t => t.IsClass && !t.IsAbstract)
            .Select(t => new
            {
                Service = t.GetInterfaces().FirstOrDefault(),
                Implementation = t
            })
            .Where(t => t.Service != null);

        foreach (var type in servicetypes)
        {
            if (transientServiceType.IsAssignableFrom(type.Service))
            {
                services.AddTransient(type.Service, type.Implementation);
            }
        }

        return services;
    }

    public static T GetOptions<T>(this IServiceCollection services, string sectionName) where T : new()
    {
        using var serviceProvider = services.BuildServiceProvider();
        var configuration = serviceProvider.GetRequiredService<IConfiguration>();
        var section = configuration.GetSection(sectionName);
        var options = new T();
        section.Bind(options);

        return options;
    }
}