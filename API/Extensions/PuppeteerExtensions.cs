using PuppeteerSharp;

namespace API.Extensions;
public static class PuppeteerExtensions
{
    private static string _executablePath = "";
    public static async Task PreparePuppeteerAsync(this IApplicationBuilder applicationBuilder,
        IWebHostEnvironment hostingEnvironment)
    {
        var downloadPath = Path.Join(hostingEnvironment.ContentRootPath, @"\puppeteer");
        if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX)) downloadPath = downloadPath.Replace(@"\", "/");
        var browserOptions = new BrowserFetcherOptions {Path = downloadPath};
        var browserFetcher = new BrowserFetcher(browserOptions);
        _executablePath = browserFetcher.GetExecutablePath(BrowserFetcher.DefaultChromiumRevision);
        await browserFetcher.DownloadAsync(BrowserFetcher.DefaultChromiumRevision);
    }

    public static string ExecutablePath => _executablePath;
}