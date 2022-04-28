namespace API.Entities;
public class UserRole : IdentityUserRole<int>
{
    [Required] public User User { get; set; } = default!;
    [Required] public Role Role { get; set; } = default!;
}