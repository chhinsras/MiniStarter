namespace API.Entities;
public class User : IdentityUser<int>
{
     public string? FirstName { get; set; }
     public string? LastName { get; set; }
     public string? ImageUrl { get; set; }
     public bool IsActive { get; set; }
     public string? RefreshToken { get; set; }
     public DateTime RefreshTokenExpiryTime { get; set; }
     public ICollection<UserRole>? UserRoles { get; set; }

}