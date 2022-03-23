namespace API.DTOs
{
    public class UserParams : PaginationParams
    {
        public string? OrderBy { get; set; }
        public string? SearchTerm { get; set; }
    }

    public class UserDto
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; }
        public string? Token { get; set; }
        public string? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }

    public class UserDetailDto
    {
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        [Required] public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; } 
    }

    public record ForceChangePassword([Required] int Id, [Required] string Password, [Required] string ConfirmPassword);
    public record ToggleUserStatusRequest([Required] bool ActivateUser, [Required] int UserId);

    
}