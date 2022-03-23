using System.Globalization;
using Microsoft.AspNetCore.Localization;

namespace API.Extensions;

public static class LocalizationExtensions
{
    public static IServiceCollection AddLocalization(this IServiceCollection services, IConfiguration config)
    {
        services.AddLocalization(options => options.ResourcesPath = $"Localization/");

        services.AddSingleton<IStringLocalizerFactory, JsonStringLocalizerFactory>();

        var middlewareSettings = config.GetSection(nameof(MiddlewareSettings)).Get<MiddlewareSettings>();
        if (middlewareSettings.EnableLocalization)
        {
            services.AddSingleton<LocalizationMiddleware>();
        }

        return services;
    }

    public static IApplicationBuilder UseLocalization(this IApplicationBuilder app, IConfiguration config)
    {
        app.UseRequestLocalization(new RequestLocalizationOptions
        {
            DefaultRequestCulture = new RequestCulture(new CultureInfo("en-US"))
        });

        var middlewareSettings = config.GetSection(nameof(MiddlewareSettings)).Get<MiddlewareSettings>();
        if (middlewareSettings.EnableLocalization)
        {
            app.UseMiddleware<LocalizationMiddleware>();
        }

        return app;
    }
}