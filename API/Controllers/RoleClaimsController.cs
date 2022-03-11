namespace API.Controllers;
public class RoleClaimsController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly IStringLocalizer<RoleClaimsController> _localizer;
    private readonly DataContext _context;

    public RoleClaimsController(
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        IStringLocalizer<RoleClaimsController> localizer,
        DataContext context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _localizer = localizer;
        _context = context;
    }

    [HttpGet]
    [Authorize(Policy = Permissions.RoleClaims.View)]
    public async Task<ActionResult<List<RoleClaimDto>>> GetAllAsync()
    {
        var roleClaims = await _context.RoleClaims.AsNoTracking().ToListAsync();
        var roleClaimDtos = roleClaims.Adapt<List<RoleClaimDto>>();

        return roleClaimDtos;
    }

    [HttpGet("{roleId}")]
    [Authorize(Policy = Permissions.RoleClaims.View)]
    public async Task<ActionResult<List<RoleClaimDto>>> GetAllByRoleIdAsync([FromRoute] int roleId)
    {
        var role = await _context.Roles.SingleOrDefaultAsync(x => x.Id == roleId);
        if (role == null) return NotFound(_localizer["Role Not Found"]);
        var roleClaims = await _context.RoleClaims.AsNoTracking().Where(x => x.RoleId == roleId).ToListAsync();
        var roleClaimDtos = roleClaims.Adapt<List<RoleClaimDto>>();
        return roleClaimDtos;
    }

    [HttpPost]
    [Authorize(Policy = Permissions.RoleClaims.Create)]
    public async Task<ActionResult<string>> PostAsync(RoleClaimRequest request)
    {
        if (request.RoleId == 0)
        {
            return NotFound(new ProblemDetails{Title = _localizer["Role is required."]});
        }

        if (request.Id == 0)
        {
            var existingRoleClaim =
                await _context.RoleClaims
                    .SingleOrDefaultAsync(x => x.RoleId == request.RoleId && x.ClaimType == request.Type && x.ClaimValue == request.Value);
            if (existingRoleClaim != null)
            {
                return BadRequest(new ProblemDetails{Title = _localizer["Similar Role Claim already exists."]});
            }

            var roleClaim = request.Adapt<RoleClaim>();
            await _context.RoleClaims.AddAsync(roleClaim!);
            await _context.SaveChangesAsync();
            return Ok(string.Format(_localizer["Role Claim {0} created."], request.Value));
        }
        else
        {
            var existingRoleClaim =
                await _context.RoleClaims
                    .Include(x => x.Role)
                    .SingleOrDefaultAsync(x => x.Id == request.Id);
            if (existingRoleClaim == null)
            {
                return NotFound(_localizer["Role Claim does not exist."]);
            }
            else
            {
                existingRoleClaim.ClaimType = request.Type;
                existingRoleClaim.ClaimValue = request.Value;
                existingRoleClaim.Group = request.Group;
                existingRoleClaim.Description = request.Description;
                existingRoleClaim.RoleId = request.RoleId;
                _context.RoleClaims.Update(existingRoleClaim);
                await _context.SaveChangesAsync();
                return Ok(string.Format(_localizer["Role Claim {0} for Role {1} updated."], request.Value, existingRoleClaim.Role?.Name));
            }
        }
    }

    [HttpDelete("{id:int}")]
    [Authorize(Policy = Permissions.RoleClaims.Delete)]
    public async Task<ActionResult<string>> DeleteAsync(int id)
    {
        var existingRoleClaim = await _context.RoleClaims
            .Include(x => x.Role)
            .FirstOrDefaultAsync(x => x.Id == id);
        if (existingRoleClaim != null)
        {
            if (existingRoleClaim.Role?.Name == Roles.SuperAdmin)
            {
                return BadRequest(string.Format(_localizer["Not allowed to delete Permissions for {0} Role."], existingRoleClaim.Role.Name));
            }

            _context.RoleClaims.Remove(existingRoleClaim);
            await _context.SaveChangesAsync();
            return Ok(string.Format(_localizer["Role Claim {0} for {1} Role deleted."], existingRoleClaim.ClaimValue, existingRoleClaim.Role?.Name));
        }
        else
        {
            return NotFound(_localizer["Role Claim does not exist."]);
        }
    }
}