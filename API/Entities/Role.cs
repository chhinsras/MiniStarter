namespace API.Entities;
public class Role : IdentityRole<int>
{
    public string? Description { get; set; }
    public ICollection<UserRole>? UserRoles { get; set; }
    public virtual ICollection<RoleClaim> RoleClaims { get; set; }

    public Role() : base()
    {
        RoleClaims = new HashSet<RoleClaim>();
    }

    public Role(string roleName, string? roleDescription = null) : base(roleName)
    {
        RoleClaims = new HashSet<RoleClaim>();
        Description = roleDescription;
    }
}