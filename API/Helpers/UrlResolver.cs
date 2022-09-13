namespace API.Helpers;

public class UserUrlResolver : IValueResolver<User, UserDto, string?>
{
    private readonly IConfiguration _configuration;
    public UserUrlResolver(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string Resolve(User source, UserDto destination, string? destMember, ResolutionContext context)
    {
        if(!String.IsNullOrEmpty(source.ImageUrl))
        {
            return _configuration["ApiUrl"] + source.ImageUrl;
        }

        return "";
    }
}