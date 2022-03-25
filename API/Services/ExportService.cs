using PuppeteerSharp;
using PuppeteerSharp.Media;

namespace API.Services;
public class ExportService
{
    private readonly ITemplateService _templateService;
    private PdfOptions pdfOptions;
    public ExportService(ITemplateService templateService)
    {
        _templateService = templateService;
        pdfOptions = new PdfOptions
        {
            Format = PaperFormat.A4,
            DisplayHeaderFooter = true,
            MarginOptions = new MarginOptions
            {
                Top = "20px",
                Right = "20px",
                Bottom = "60px",
                Left = "20px"
            },
            FooterTemplate = "<div id=\"footer-template\" style=\"font-size:10px !important; color:#808080; padding-left:10px\"><p class=\"khmer-content\">ជើងទំព័រ</p></div>"
        };
    }
    public async Task<Stream> GeneratePdfContent(string reportName, IViewModel model) 
    {
        var html = await _templateService.RenderAsync(Reports.TableReport, model);
        await using var browser = await Puppeteer.LaunchAsync(new LaunchOptions
        {
            Headless = true,
            ExecutablePath = PuppeteerExtensions.ExecutablePath
        });
        await using var page = await browser.NewPageAsync();
        await page.EmulateMediaTypeAsync(MediaType.Screen);
        await page.SetContentAsync(html);
        var pdfContent = await page.PdfStreamAsync(pdfOptions);

        return pdfContent;
    }
}