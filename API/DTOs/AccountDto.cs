namespace API.DTOs;
public record TokenResponse(string Token, string RefreshToken, DateTime RefreshTokenExpiryTime);
public record RefreshTokenRequest(string Token, string RefreshToken);
public record LoginDto([Required] string Username, [Required] string Password);
public record RegisterDto([Required] string Username, [Required] string Password, [Required][EmailAddress] string Email);
public record ForgotPasswordRequest([Required][EmailAddress] string Email);
public record ChangePasswordRequest([Required] string Password, [Required] string NewPassword, [Required] string ConfirmNewPassword);
public record ResetPasswordRequest([Required][EmailAddress] string Email, [Required] string Password, [Required] string Token);
