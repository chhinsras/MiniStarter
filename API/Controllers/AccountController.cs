namespace API.Controllers;
public class AccountController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly TokenService _tokenService;
    private readonly JwtSettings _jwtSettings;
    private readonly IStringLocalizer _localizer;

    public AccountController(UserManager<User> userManager, TokenService tokenService,
        IOptions<JwtSettings> jwtSettings, IStringLocalizer<AccountController> localizer)
    {
        _tokenService = tokenService;
        _userManager = userManager;
        _jwtSettings = jwtSettings.Value;
        _localizer = localizer;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _userManager.FindByNameAsync(loginDto.Username);
        if (user == null) return NotFound();
        if(!user.IsActive) return Unauthorized();
        if (!await _userManager.CheckPasswordAsync(user, loginDto.Password)) return Unauthorized();

        return Ok(await CreateUserObject(user, GenerateIPAddress()));
    }

    [HttpPost("refresh-token")]
    [AllowAnonymous]
    public async Task<ActionResult<UserDto>> RefreshAsync(RefreshTokenRequest request)
    {
        var userPrincipal = _tokenService.GetPrincipalFromExpiredToken(request.Token);
        string? userEmail = userPrincipal.GetEmail();
        var user = await _userManager.FindByEmailAsync(userEmail);
        if (user is null) return Unauthorized();
        if (user.RefreshToken != request.RefreshToken || user.RefreshTokenExpiryTime <= DateTime.UtcNow) return Unauthorized();
        
        return Ok(await CreateUserObject(user, GenerateIPAddress()));
    }

    [HttpPost("register")]
    [MustHavePermission(Permissions.Account.Register)]
    public async Task<ActionResult> Register(RegisterDto registerDto)
    {
        var user = new User { UserName = registerDto.Username, Email = registerDto.Email };
        var result = await _userManager.CreateAsync(user, registerDto.Password);
        if (!result.Succeeded)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }
            return ValidationProblem();
        }
        await _userManager.AddToRoleAsync(user, Roles.BasicUser);

        return StatusCode(201);
    }

    [HttpGet("confirm-email")]
    [AllowAnonymous]
    public Task<string> ConfirmEmailAsync([FromQuery] string userId, [FromQuery] string code)
    {
        throw new NotImplementedException();
    }

    [HttpGet("confirm-phone-number")]
    [AllowAnonymous]
    public Task<string> ConfirmPhoneNumberAsync([FromQuery] string userId, [FromQuery] string code)
    {
        throw new NotImplementedException();
    }

    [HttpGet("forgot-password")]
    [AllowAnonymous]
    public Task<string> ForgotPasswordAsync([FromQuery] string userId, [FromQuery] string code)
    {
        throw new NotImplementedException();
    }

    private string GenerateIPAddress()=>
        Request.Headers.ContainsKey("X-Forwarded-For")
            ? Request.Headers["X-Forwarded-For"]
            : HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString() ?? "N/A";
    
    private async Task<UserDto> CreateUserObject(User user, string ipAddress)
    {
        var tokenResponse = await _tokenService.GenerateTokensAndUpdateUser(user, ipAddress);

        return new UserDto
        {
            UserName = user.UserName,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            ImageUrl = user.ImageUrl,
            IsActive = user.IsActive,
            Token = tokenResponse.Token,
            RefreshToken = tokenResponse.RefreshToken,
            RefreshTokenExpiryTime = tokenResponse.RefreshTokenExpiryTime
        };
    }
}