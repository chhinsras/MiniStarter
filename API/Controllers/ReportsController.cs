namespace API.Controllers;
public class ReportsController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ExportService _exportService;
    public ReportsController(DataContext context, ExportService exportService)
    {
        _exportService = exportService;
        _context = context;
    }

    #region Reports Endpoints


    [HttpGet("TableTemplate")]
    [MustHavePermission(Permissions.Reports.Table)]
    public async Task<ActionResult> TableReport()
    {
        var items = await _context.Districts.ToListAsync();
        var model = new TableViewModel<DistrictDto>(items.Adapt<List<DistrictDto>>());
        return File(await _exportService.GeneratePdfContent(Reports.TableReport, model), "application/pdf", $"Table-{DateTime.Now}.pdf");
    }

    [HttpGet("InvoiceTemplate")]
    [MustHavePermission(Permissions.Reports.Invoice)]
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
        return File(await _exportService.GeneratePdfContent(Reports.InvoiceReport, model), "application/pdf", $"Invoice-{DateTime.Now}.pdf");
    }

    #endregion
}
