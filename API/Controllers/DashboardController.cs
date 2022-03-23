namespace API.Controllers;
public class DashboardController : BaseApiController
{
    private readonly DataContext _context;
    public DashboardController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    [MustHavePermission(Permissions.Reports.Dashboard)]
    public Task<ActionResult> GetAsync()
    {
        throw new NotImplementedException();
    }
}