namespace API.Controllers;
public class AuditLogsController : BaseApiController
{
    private readonly DataContext _context;
    public AuditLogsController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    [MustHavePermission(Permissions.Audit.View)]
    public async Task<ActionResult<List<AuditDto>>> GetPagedLogsAsync([FromQuery]AuditParams auditParams)
    {
        var query = _context.AuditTrails.AsQueryable();

        query = query.OrderByDescending(x => x.TimeStamp);

        var trails = await PagedList<AuditTrail>.ToPagedList(query, auditParams.PageNumber, auditParams.PageSize);
        Response.AddPaginationHeader(trails.MetaData);

        return trails.Adapt<List<AuditDto>>();
 
    }

    [HttpGet("all")]
    [MustHavePermission(Permissions.Audit.View)]
    public async Task<ActionResult<List<AuditDto>>> GetAllLogsAsync()
    {
        var trails = await _context.AuditTrails.ToListAsync();
        return trails.Adapt<List<AuditDto>>();
    }

    [HttpGet("{userId}")]
    [MustHavePermission(Permissions.Audit.View)]
    public async Task<ActionResult<List<AuditDto>>> GetMyLogsAsync(int userId)
    {
         var trails = await _context.AuditTrails
            .Where(a => a.UserId == userId)
            .OrderByDescending(a => a.TimeStamp)
            .Take(250)
            .ToListAsync();

        return trails.Adapt<List<AuditDto>>();
 
    }
}