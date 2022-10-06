#nullable disable
namespace API.Helpers;

public class MustHavePermission : AuthorizeAttribute
{
    public MustHavePermission(string permission)
    {
        Policy = permission;
    }
}

public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
{
    public PermissionAuthorizationHandler()
    { }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, PermissionRequirement requirement)
    {
        if (context.User == null)
        {
            await Task.CompletedTask;
        }

        var permissions = context?.User?.Claims.Where(x => x.Type == CustomClaimTypes.Permission &&
                                                            x.Value == requirement.Permission &&
                                                            x.Issuer == "LOCAL AUTHORITY");
        if (permissions!.Any())
        {
            context!.Succeed(requirement);
            await Task.CompletedTask;
        }
    }
}

public class PermissionPolicyProvider : IAuthorizationPolicyProvider
{
    public DefaultAuthorizationPolicyProvider FallbackPolicyProvider { get; }

    public PermissionPolicyProvider(IOptions<AuthorizationOptions> options)
    {
        FallbackPolicyProvider = new DefaultAuthorizationPolicyProvider(options);
    }

    public Task<AuthorizationPolicy> GetDefaultPolicyAsync() => FallbackPolicyProvider.GetDefaultPolicyAsync();

    public Task<AuthorizationPolicy> GetPolicyAsync(string policyName)
    {
        if (policyName.StartsWith(CustomClaimTypes.Permission, StringComparison.OrdinalIgnoreCase))
        {
            var policy = new AuthorizationPolicyBuilder();
            policy.AddRequirements(new PermissionRequirement(policyName));
            return Task.FromResult(policy.Build());
        }
        return FallbackPolicyProvider.GetPolicyAsync(policyName);
    }

    public Task<AuthorizationPolicy> GetFallbackPolicyAsync() => Task.FromResult<AuthorizationPolicy>(null);
}

public class PermissionRequirement : IAuthorizationRequirement
{
    public string Permission { get; private set; }

    public PermissionRequirement(string permission)
    {
        Permission = permission;
    }
}

 public static class ClaimsHelper
{
    public static void GetAllPermissions(this List<RoleClaimDto> allPermissions)
    {
        foreach (var module in typeof(Permissions).GetNestedTypes())
        {
            string moduleName = string.Empty;
            string moduleDescription = string.Empty;

            if (module.GetCustomAttributes(typeof(DisplayNameAttribute), true)
                .FirstOrDefault() is DisplayNameAttribute displayNameAttribute)
            {
                moduleName = displayNameAttribute.DisplayName;
            }

            if (module.GetCustomAttributes(typeof(DescriptionAttribute), true)
                .FirstOrDefault() is DescriptionAttribute descriptionAttribute)
            {
                moduleDescription = descriptionAttribute.Description;
            }

            foreach (var fi in module.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.FlattenHierarchy))
            {
                object propertyValue = fi.GetValue(null);

                if (propertyValue is not null)
                {
                    allPermissions.Add(new() { Value = propertyValue.ToString(), Type = CustomClaimTypes.Permission, Group = moduleName, Description = moduleDescription });
                }
            }
        }
    }

    public static async Task<IdentityResult> AddPermissionClaimAsync(this RoleManager<Role> roleManager, Role role, string permission)
    {
        var allClaims = await roleManager.GetClaimsAsync(role);
        if (!allClaims.Any(a => a.Type == CustomClaimTypes.Permission && a.Value == permission))
        {
            return await roleManager.AddClaimAsync(role, new(CustomClaimTypes.Permission, permission));
        }

        return IdentityResult.Failed();
    }

    public static async Task AddCustomPermissionClaimAsync(this RoleManager<Role> roleManager, Role role, string permission)
    {
        var allClaims = await roleManager.GetClaimsAsync(role);
        if (!allClaims.Any(a => a.Type == CustomClaimTypes.Permission && a.Value == permission))
        {
            await roleManager.AddClaimAsync(role, new(CustomClaimTypes.Permission, permission));
        }
    }
}

