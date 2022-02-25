namespace API.DTOs;

public class PermissionDto
{
    public string Permission { get; set; } = default!;
    public string? Group { get; set; }
    public string? Description { get; set; }
}

public class UpdatePermissionsRequest
{
    public string RoleId { get; set; } = default!;
    public List<string> Permissions { get; set; } = default!;
}

// public class UpdatePermissionsRequestValidator : CustomValidator<UpdatePermissionsRequest>
// {
//     public UpdatePermissionsRequestValidator()
//     {
//         RuleFor(r => r.RoleId)
//             .NotEmpty();
//         RuleFor(r => r.Permissions)
//             .NotNull();
//     }
// }