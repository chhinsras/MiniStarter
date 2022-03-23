namespace API.DTOs;
public class ForgotPasswordRequest
{
    public string Email { get; set; } = default!;
}
public class ChangePasswordRequest
{
    public string Password { get; set; } = default!;
    public string NewPassword { get; set; } = default!;
    public string ConfirmNewPassword { get; set; } = default!;
}
public class ResetPasswordRequest
{
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? Token { get; set; }
}
