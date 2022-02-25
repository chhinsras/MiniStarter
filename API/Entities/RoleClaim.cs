namespace API.Entities;
public class RoleClaim : IdentityRoleClaim<int>
{
    public string? Description { get; set; }
    public string? Group { get; set; }
    public virtual Role? Role { get; set; }

    public RoleClaim() : base()
    {
    }

    public RoleClaim(string? roleClaimDescription = null, string? roleClaimGroup = null) : base()
    {
        Description = roleClaimDescription;
        Group = roleClaimGroup;
    }
}