namespace API.Controllers;
public class RolesController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly IStringLocalizer _localizer;
    private readonly DataContext _context;

    public RolesController(
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        IStringLocalizer<RolesController> localizer,
        DataContext context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _localizer = localizer;
        _context = context;
    }

    [HttpGet("all")]
    [MustHavePermission(Permissions.Roles.View)]
    public async Task<ActionResult<List<RoleDto>>> GetListAsync()
    {
        var roles = await _roleManager.Roles.ToListAsync();

        var roleDtos = roles.Adapt<List<RoleDto>>();
        roleDtos.ForEach((role) =>  
        {
            role.IsDefault = DefaultRoles.Contains(role.Name);
            role.Permissions = _context.RoleClaims
                .Where(a => a.RoleId == role.Id && a.ClaimType == CustomClaimTypes.Permission)
                .Select(c => c.ClaimValue)
                .ToList();
        });
        
        return roleDtos;
    }

    [HttpGet("{roleId}")]
    [MustHavePermission(Permissions.Roles.View)]
    public async Task<ActionResult<RoleDto>> GetByIdAsync(int roleId)
    {
        var role = await _context.Roles.SingleOrDefaultAsync(x => x.Id == roleId);
        if (role == null) return NotFound();
        var roleDto = role.Adapt<RoleDto>();
        roleDto.IsDefault = DefaultRoles.Contains(role.Name);
        return roleDto;
    }

    [HttpGet("{roleId}/permissions")]
    [MustHavePermission(Permissions.RoleClaims.View)]
    public async Task<ActionResult<RoleDto>> GetByIdWithPermissionsAsync(int roleId)
    {
        var role = await _context.Roles.SingleOrDefaultAsync(x => x.Id == roleId);
        if (role == null) return NotFound();
        var roleDto = role.Adapt<RoleDto>();
        roleDto.IsDefault = DefaultRoles.Contains(role.Name);
  
        roleDto.Permissions = (await _context.RoleClaims
            .Where(a => a.RoleId == roleId && a.ClaimType == CustomClaimTypes.Permission)
            .Select(c => c.ClaimValue)
            .ToListAsync());

        return roleDto;
    }

    [HttpPut("permissions")]
    [MustHavePermission(Permissions.RoleClaims.Update)]
    public async Task<ActionResult<string>> UpdatePermissionsAsync(UpdatePermissionsRequest request)
    {
        var selectedPermissions = request.Permissions;
        var role = await _roleManager.FindByIdAsync(request.RoleId);
        if (role == null) return NotFound();
        if (role.Name == Roles.Admin)
        {
            return BadRequest(new ProblemDetails { Title = _localizer["Not allowed to modify Permissions for this Role."]});
        }

        var currentPermissions = await _roleManager.GetClaimsAsync(role);

        // Remove permissions that were previously selected
        foreach (var claim in currentPermissions.Where(c => !selectedPermissions.Any(p => p == c.Value)))
        {
            var removeResult = await _roleManager.RemoveClaimAsync(role, claim);
            if (!removeResult.Succeeded)
            {
                foreach (var error in removeResult.Errors)
                {
                    ModelState.AddModelError(error.Code, _localizer[error.Description].ToString());
                }

                return ValidationProblem();
            }
        }

        // Add all permissions that were not previously selected
        foreach (string permission in selectedPermissions.Where(c => !currentPermissions.Any(p => p.Value == c)))
        {
            if (!string.IsNullOrEmpty(permission))
            {
                var addResult = await _roleManager.AddClaimAsync(role, new Claim(CustomClaimTypes.Permission, permission));
                if (!addResult.Succeeded)
                {
                     foreach (var error in addResult.Errors)
                    {
                        ModelState.AddModelError(error.Code, _localizer[error.Description].ToString());
                    }
                    
                    return ValidationProblem();
                }
            }
        }

        return Ok();
    }

    [HttpPost]
    [MustHavePermission(Permissions.Roles.Create)]
    public async Task<ActionResult<string>> RegisterRoleAsync(RoleRequest request)
    {
        if (request.Id == 0)
        {
            var newRole = new Role(request.Name, request.Description);
            var result = await _roleManager.CreateAsync(newRole);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }
        }
        else
        {
            var role = await _roleManager.FindByIdAsync(request.Id.ToString());

            if (role == null) return NotFound();

            if (DefaultRoles.Contains(role.Name))
            {
                return BadRequest(new ProblemDetails { Title = string.Format(_localizer["Not allowed to modify {0} Role."], role.Name)});
            }

            role.Name = request.Name;
            role.NormalizedName = request.Name.ToUpperInvariant();
            role.Description = request.Description;
            var result = await _roleManager.UpdateAsync(role);


            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }
        }
        return Ok();
    }

    [HttpDelete("{roleId}")]
    [MustHavePermission(Permissions.Roles.Delete)]
    public async Task<ActionResult<string>> DeleteAsync(int roleId)
    {
        var role = await _roleManager.FindByIdAsync(roleId.ToString());

        if (role == null) return NotFound();

        if (DefaultRoles.Contains(role.Name))
        {
            return BadRequest(new ProblemDetails { Title = string.Format(_localizer["Not allowed to delete {0} Role."], role.Name)});
        }

        bool roleIsNotUsed = true;
        var allUsers = await _userManager.Users.ToListAsync();
        foreach (var user in allUsers)
        {
            if (await _userManager.IsInRoleAsync(user, role.Name))
            {
                roleIsNotUsed = false;
            }
        }

        if (roleIsNotUsed)
        {
            await _roleManager.DeleteAsync(role);
            return string.Format(_localizer["Role {0} Deleted."], role.Name);
        }
        else
        {
            return BadRequest(new ProblemDetails { Title = string.Format(_localizer["Not allowed to delete {0} Role as it is being used."], role.Name)});
        }
    }

    internal static List<string> DefaultRoles =>
        typeof(Roles).GetAllPublicConstantValues<string>();
}