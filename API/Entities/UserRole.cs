namespace API.Entities;
public class UserRole : IdentityUserRole<int>
{
   public virtual User User { get; set; } = default!;
   public virtual Role Role { get; set; } = default!;
}