#nullable disable
namespace API.Services;

public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public string Name => _accessor.HttpContext?.User.Identity?.Name;

    public int GetUserId()
    {
        return IsAuthenticated() ? _accessor.HttpContext?.User.GetUserId() ?? 0 : 0;
    }

    public string GetUserEmail()
    {
        return IsAuthenticated() ? _accessor.HttpContext?.User.GetEmail() : string.Empty;
    }

    public bool IsAuthenticated()
    {
        return _accessor.HttpContext?.User.Identity?.IsAuthenticated ?? false;
    }

    public bool IsInRole(string role)
    {
        return _accessor.HttpContext?.User.IsInRole(role) ?? false;
    }

    public IEnumerable<Claim> GetUserClaims()
    {
        return _accessor.HttpContext?.User.Claims;
    }

    public HttpContext GetHttpContext()
    {
        return _accessor.HttpContext;
    }
}