namespace API.Helpers;
public class JwtSettings
{
    public string? Key { get; set; }

    public int TokenExpirationInMinutes { get; set; }

    public int RefreshTokenExpirationInDays { get; set; }
}

public class MiddlewareSettings
{
    public bool EnableLocalization { get; set; } = false;
}

public class CorsSettings
{
    public string? Angular { get; set; }
    public string? Flutter { get; set; }
}