namespace API.Interfaces;
public interface ICurrentUserService : ITransientService
{
    string Name { get; }
    int GetUserId();
    string GetUserEmail();
    bool IsAuthenticated();
    bool IsInRole(string role);
    IEnumerable<Claim> GetUserClaims();
}