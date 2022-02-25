namespace API.DTOs;
public class UserRoleDto
{
    public int RoleId { get; set; }
    public string? RoleName { get; set; }
    public string? Description { get; set; }
    public bool Enabled { get; set; }
}

public class UserRolesRequest
{
    public List<UserRoleDto> UserRoles { get; set; } = new();
}