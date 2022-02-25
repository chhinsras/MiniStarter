using API.Data;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers;
public class AccountController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly TokenService _tokenService;
    private readonly DataContext _context;
    public AccountController(UserManager<User> userManager, TokenService tokenService, DataContext context)
    {
        _context = context;
        _tokenService = tokenService;
        _userManager = userManager;
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _userManager.FindByNameAsync(loginDto.Username);

        if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
            return Unauthorized();

        return new UserDto
        {
            Email = user.Email,
            Token = await _tokenService.GenerateToken(user),
        };
    }

    [HttpPost("register")]
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

        await _userManager.AddToRoleAsync(user, "Member");

        return StatusCode(201);
    }

    [Authorize]
    [HttpGet("currentUser")]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
        var user = await _userManager.FindByNameAsync(User.Identity!.Name);

        return new UserDto
        {
            Email = user.Email,
            Token = await _tokenService.GenerateToken(user)
        };
    }

    private string? GenerateIPAddress()
    {
        if (Request.Headers.ContainsKey("X-Forwarded-For"))
            return Request.Headers["X-Forwarded-For"];
        else
            return HttpContext.Connection.RemoteIpAddress?.MapToIPv4().ToString();
    }
}