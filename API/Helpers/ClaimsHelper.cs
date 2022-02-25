#nullable disable
namespace API.Helpers;
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