using PuppeteerSharp;
using PuppeteerSharp.Media;

namespace API.Controllers;
public class ReportsController : BaseApiController
{
    private readonly ITemplateService _templateService;
    private readonly DataContext _context;
    private PdfOptions pdfOptions;
    public ReportsController(ITemplateService templateService, DataContext context)
    {
        _context = context;
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

    #region Reports Endpoints


    [HttpGet("TableTemplate")]
    // [MustHavePermission(Permissions.Reports.Invoice)]
    public async Task<ActionResult> TableReport()
    {
        var items = await _context.Districts.ToListAsync();
        var model = new TableViewModel(items.Adapt<List<DistrictDto>>());
        var html = await _templateService.RenderAsync(Reports.TableReport, model);
        return File(await GeneratePdfContent(html), "application/pdf", $"Table-{DateTime.Now}.pdf");
    }


    [HttpGet("InvoiceTemplate")]
    // [MustHavePermission(Permissions.Reports.Invoice)]
    public async Task<ActionResult> InvoiceReport()
    {
        var model = new InvoiceViewModel
        {
            CreatedAt = DateTime.Now,
            Due = DateTime.Now.AddDays(10),
            Id = 12533,
            AddressLine = "Jumpy St. 99",
            City = "Trampoline",
            ZipCode = "22-113",
            CompanyName = "Jumping Rabbit Co.",
            PaymentMethod = "Check",
            Items = new List<InvoiceItemViewModel>
            {
                new InvoiceItemViewModel("Website design", 621.99m),
                new InvoiceItemViewModel("Website creation", 1231.99m)
            }
        };
        var html = await _templateService.RenderAsync(Reports.InvoiceReport, model);
       
        return File(await GeneratePdfContent(html), "application/pdf", $"Invoice-{DateTime.Now}.pdf");
    }

    private async Task<Stream> GeneratePdfContent(string html) 
    {
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

    #endregion
}
