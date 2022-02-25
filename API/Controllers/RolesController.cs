namespace API.Controllers;
public class RolesController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly IStringLocalizer<RolesController> _localizer;
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
        roleDtos.ForEach(role => role.IsDefault = DefaultRoles.Contains(role.Name));

        return roleDtos;
    }

    [HttpGet("{roleId}")]
    [MustHavePermission(Permissions.Roles.View)]
    public async Task<ActionResult<RoleDto>> GetByIdAsync(int roleId)
    {
        var role = await _context.Roles.SingleOrDefaultAsync(x => x.Id == roleId);
        if (role == null) return NotFound(_localizer["Role Not Found"]);
        var roleDto = role.Adapt<RoleDto>();
        roleDto.IsDefault = DefaultRoles.Contains(role.Name);
        return roleDto;
    }

    [HttpGet("{roleId}/permissions")]
    [MustHavePermission(Permissions.RoleClaims.View)]
    public async Task<ActionResult<RoleDto>> GetByIdWithPermissionsAsync(int roleId)
    {
        var role = await _context.Roles.SingleOrDefaultAsync(x => x.Id == roleId);
        if (role == null) return NotFound(_localizer["Role Not Found"]);
        var roleDto = role.Adapt<RoleDto>();
        roleDto.IsDefault = DefaultRoles.Contains(role.Name);
  
        roleDto.Permissions = (await _context.RoleClaims
            .Where(a => a.RoleId == roleId && a.ClaimType == CustomClaimTypes.Permission)
            .ToListAsync())
            .Adapt<List<PermissionDto>>();
        return roleDto;
    }

    [HttpPut("permissions")]
    [MustHavePermission(Permissions.RoleClaims.Update)]
    public async Task<ActionResult<string>> UpdatePermissionsAsync(UpdatePermissionsRequest request)
    {
        var selectedPermissions = request.Permissions;
        var role = await _roleManager.FindByIdAsync(request.RoleId);
        if (role == null) return NotFound(_localizer["Role Not Found"]);
        if (role.Name == Roles.Admin)
        {
            return BadRequest(_localizer["Not allowed to modify Permissions for this Role."]);
        }

        var currentPermissions = await _roleManager.GetClaimsAsync(role);

        // Remove permissions that were previously selected
        foreach (var claim in currentPermissions.Where(c => !selectedPermissions.Any(p => p == c.Value)))
        {
            var removeResult = await _roleManager.RemoveClaimAsync(role, claim);
            if (!removeResult.Succeeded)
            {
                return BadRequest("Update permission failed.");
                // TODO:
                // return BadRequest(_localizer["Update permissions failed."], removeResult.Errors.Select(e => _localizer[e.Description].ToString()).ToList());
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
                    return BadRequest("Update permission failed.");
               
                    // throw new InternalServerException(_localizer["Update permissions failed."], addResult.Errors.Select(e => _localizer[e.Description].ToString()).ToList());
                }
            }
        }

        return Ok(_localizer["Permissions Updated."]);
    }

    [HttpPost]
    [MustHavePermission(Permissions.Roles.Create)]
    public async Task<ActionResult<string>> RegisterRoleAsync(RoleRequest request)
    {
        if (string.IsNullOrEmpty(request.Id))
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
            var role = await _roleManager.FindByIdAsync(request.Id);

            if (role == null) return NotFound(_localizer["Role Not Found"]);

            if (DefaultRoles.Contains(role.Name))
            {
                return BadRequest(string.Format(_localizer["Not allowed to modify {0} Role."], role.Name));
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

        if (role == null) return NotFound(_localizer["Role Not Found"]);

        if (DefaultRoles.Contains(role.Name))
        {
            return BadRequest(string.Format(_localizer["Not allowed to delete {0} Role."], role.Name));
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
            return BadRequest(string.Format(_localizer["Not allowed to delete {0} Role as it is being used."], role.Name));
        }
    }

    internal static List<string> DefaultRoles =>
        typeof(Roles).GetAllPublicConstantValues<string>();
}