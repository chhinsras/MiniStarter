namespace API.Controllers;
public class AuditLogsController : BaseApiController
{
    private readonly DataContext _context;
    public AuditLogsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet("{userId}")]
    public async Task<ActionResult<List<AuditDto>>> GetMyLogsAsync(int userId)
    {
         var trails = await _context.AuditTrails
            .Where(a => a.UserId == userId)
            .OrderByDescending(a => a.DateTime)
            .Take(250)
            .ToListAsync();

        return trails.Adapt<List<AuditDto>>();
 
    }

   

}