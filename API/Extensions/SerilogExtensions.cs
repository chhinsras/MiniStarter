namespace API.Extensions;
public static class SerilogExtensions
{
    public static WebApplicationBuilder UseSerilog(this WebApplicationBuilder builder)
    {
        var configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.Development.json")
            .AddJsonFile("appsettings.json")
            .AddEnvironmentVariables()
            .Build();
        Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(configuration).CreateLogger();
        SerilogHostBuilderExtensions.UseSerilog(builder.Host);
        return builder;
    }
}
