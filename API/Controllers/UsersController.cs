namespace API.Controllers;
public class UsersController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly IStringLocalizer<UsersController> _localizer;
    private readonly DataContext _context;

    public UsersController(
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        IStringLocalizer<UsersController> localizer,
        DataContext context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _localizer = localizer;
        _context = context;
    }

    [HttpGet]
    [MustHavePermission(Permissions.Users.View)]
    public async Task<ActionResult<List<UserDto>>> GetAllAsync() =>
        (await _userManager.Users
                .AsNoTracking()
                .ToListAsync())
                .Adapt<List<UserDto>>();

    [HttpGet("{userId}")]
    [MustHavePermission(Permissions.Users.View)]
    public async Task<ActionResult<UserDto>> GetByIdAsync(int userId)
    {
        var user = await _userManager.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .FirstOrDefaultAsync();

        if (user == null) return NotFound(_localizer["User Not Found."]);

        return user.Adapt<UserDto>();
    }

    [HttpGet("{userId}/roles")]
    [MustHavePermission(Permissions.Roles.View)]
    public async Task<ActionResult<List<UserRoleDto>>> GetRolesAsync(string userId)
    {
        var userRoles = new List<UserRoleDto>();

        var user = await _userManager.FindByIdAsync(userId);
        var roles = await _roleManager.Roles.AsNoTracking().ToListAsync();
        foreach (var role in roles)
        {
            userRoles.Add(new UserRoleDto
            {
                RoleId = role.Id,
                RoleName = role.Name,
                Description = role.Description,
                Enabled = await _userManager.IsInRoleAsync(user, role.Name)
            });
        }

        return userRoles;
    }

    [HttpGet("{userId}/permissions")]
    [MustHavePermission(Permissions.RoleClaims.View)]
    public async Task<ActionResult<List<PermissionDto>>> GetPermissionsAsync(int userId)
    {
        var user = await _userManager.FindByIdAsync(userId.ToString());

        if (user == null) return NotFound(_localizer["User Not Found."]);

        var permissions = new List<PermissionDto>();
        var userRoles = await _userManager.GetRolesAsync(user);
        foreach (var role in await _roleManager.Roles
            .Where(r => userRoles.Contains(r.Name))
            .ToListAsync())
        {
            var roleClaims = await _context.RoleClaims
                .Where(rc => rc.RoleId == role.Id && rc.ClaimType == CustomClaimTypes.Permission)
                .ToListAsync();
            permissions.AddRange(roleClaims.Adapt<List<PermissionDto>>());
        }

        return permissions.Distinct().ToList();
    }

    [HttpPost("{userId}/roles")]
    public async Task<ActionResult<string>> AssignRolesAsync(int userId, UserRolesRequest request)
    {
         ArgumentNullException.ThrowIfNull(request, nameof(request));

        var user = await _userManager.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();

        if (user == null) return NotFound(_localizer["User Not Found."]);

        foreach (var userRole in request.UserRoles)
        {
            // Check if Role Exists
            if (await _roleManager.FindByNameAsync(userRole.RoleName) is not null)
            {
                if (userRole.Enabled)
                {
                    if (!await _userManager.IsInRoleAsync(user, userRole.RoleName))
                    {
                        await _userManager.AddToRoleAsync(user, userRole.RoleName);
                    }
                }
                else
                {
                    await _userManager.RemoveFromRoleAsync(user, userRole.RoleName);
                }
            }
        }

        return Ok(_localizer["User Roles Updated Successfully."]);
    }

    [HttpPost("toggle-status")]
    [MustHavePermission(Permissions.Users.Update)]
    public async Task<ActionResult> ToggleUserStatusAsync(ToggleUserStatusRequest request)
    {
        var user = await _userManager.Users.Where(u => u.Id == request.UserId).FirstOrDefaultAsync();

        if (user == null) return NotFound(_localizer["User Not Found."]);

        bool isAdmin = await _userManager.IsInRoleAsync(user, Roles.Admin);
        if (isAdmin)
        {
            return BadRequest(new ProblemDetails { Title = _localizer["Administrators Profile's Status cannot be toggled"]});
        }

        user.IsActive = request.ActivateUser;
        var identityResult = await _userManager.UpdateAsync(user);
        
        return Ok(identityResult);
    }
}