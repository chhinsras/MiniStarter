namespace API.Controllers;
public class AccountController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly TokenService _tokenService;
    private readonly JwtSettings _jwtSettings;
    private readonly ServerSettings _serverSettings;
    private readonly IStringLocalizer _localizer;

    public AccountController(UserManager<User> userManager, TokenService tokenService,
        IOptions<JwtSettings> jwtSettings, IOptions<ServerSettings> serverSettings,
        IStringLocalizer<AccountController> localizer)
    {
        _tokenService = tokenService;
        _userManager = userManager;
        _jwtSettings = jwtSettings.Value;
        _serverSettings = serverSettings.Value;
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

    [HttpGet("current-user")]
    [Authorize]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
        User? user = await GetCurrentLogedInUser();
        if (user == null) return NotFound();

        user.ImageUrl = _serverSettings.ApiUrl + user.ImageUrl;

        return user.Adapt<UserDto>();
    }

    [HttpPut("update-profile")]
    [Authorize]
    public async Task<ActionResult> UpdateProfile(UpdateProfileDto updateProfileDto)
    {
        var currentUserId = User.GetUserId();
        var user = await _userManager.Users.Where(u => u.Id == currentUserId).FirstOrDefaultAsync();
        if (user == null) return NotFound();
        updateProfileDto.Adapt(user);
        var result = await _userManager.UpdateAsync(user);
        if (!result.Succeeded) return BadRequest(new ProblemDetails {Title = "Failed to update profile"});
        return Ok();

    }

    [HttpPut("change-password")]
    [Authorize]
    public async Task<ActionResult> ChangePasasword(ChangePasswordRequest changePasswordRequest)
    {
        if(changePasswordRequest.NewPassword != changePasswordRequest.ConfirmNewPassword) return BadRequest(new ProblemDetails { Title = "Password are not match"});
        var currentUserId = User.GetUserId();
        var user = await _userManager.Users.Where(u => u.Id == currentUserId).FirstOrDefaultAsync();
        if (user == null) return NotFound();
        var result = await _userManager.ChangePasswordAsync(user, changePasswordRequest.Password, changePasswordRequest.NewPassword);
        if (!result.Succeeded) return BadRequest(new ProblemDetails {Title = "Failed to change password"});
        return Ok();
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
            ImageUrl = _serverSettings.ApiUrl + user.ImageUrl,
            IsActive = user.IsActive,
            Token = tokenResponse.Token,
            RefreshToken = tokenResponse.RefreshToken,
            RefreshTokenExpiryTime = tokenResponse.RefreshTokenExpiryTime
        };
    }
    private async Task<User?> GetCurrentLogedInUser()
    {
        var currentUserId = User.GetUserId();
        return await _userManager.Users.AsNoTracking()
            .Where(u => u.Id == currentUserId).FirstOrDefaultAsync();
    }
}