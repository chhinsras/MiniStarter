namespace API.DTOs;
public record TokenResponse(string Token, string RefreshToken, DateTime RefreshTokenExpiryTime);
public record RefreshTokenRequest(string Token, string RefreshToken);