using Microsoft.Extensions.FileProviders;

namespace API.Extensions;
public static class BuilderExtensions 
{
 public static WebApplication UsePipelineBuilder(this WebApplication app, IConfiguration config)
    {
        app.UseMiddleware<ExceptionMiddleware>();
        
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            // app.UseDeveloperExceptionPage();
        }
        app.UseHttpsRedirection();
        app.UseCors("CorsPolicy");
        app.UseLocalization(config);
        app.UseRouting();
        app.UseAuthentication();
        app.UseAuthorization();

        app.UseDefaultFiles();
        app.UseStaticFiles();
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "Files")
            ), RequestPath = "/Files"
        });

        app.PreparePuppeteerAsync(app.Environment).GetAwaiter().GetResult();

        app.MapControllers();
        app.MapFallbackToFile("index.html");
        
        app.Initialize();

        return app;
    }

    public static IApplicationBuilder Initialize(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices.CreateScope();

        var initializers = serviceScope.ServiceProvider.GetServices<IDatabaseSeeder>();

        foreach (var initializer in initializers)
        {
            initializer.Initialize();
        }

        return app;
    } 
}