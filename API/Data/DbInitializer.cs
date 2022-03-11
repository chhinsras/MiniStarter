namespace API.Data;
public class DbInitializer : IDatabaseSeeder
{
    private readonly ILogger<DbInitializer> _logger;
    private readonly DataContext _context;
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;
    private readonly IStringLocalizer<DbInitializer> _localizer;

    public DbInitializer(
        ILogger<DbInitializer> logger,
        DataContext context,
        UserManager<User> userManager,
        RoleManager<Role> roleManager,
        IStringLocalizer<DbInitializer> localizer)
    {
        _logger = logger;
        _context = context;
        _userManager = userManager;
        _roleManager = roleManager;
        _localizer = localizer;
    }

     public void Initialize()
    {
        try
        {
            AddDefaultRoles();
            AddSuperAdmin();
            AddBasicUser();
            AddCambodiaGazetteers();
            _context.SaveChanges();
        }
        catch (Exception)
        {
            _logger.LogError(_localizer["An error occurred while seeding data."]);
        }
    }

    private void AddDefaultRoles()
    {
        Task.Run(async () =>
        {
            var roleList = new List<string> { Roles.SuperAdmin, Roles.Admin, Roles.BasicUser};
            foreach (var roleName in roleList)
            {
                var role = new Role(roleName);
                var roleInDb = await _roleManager.FindByNameAsync(roleName);
                if (roleInDb == null)
                {
                    await _roleManager.CreateAsync(role);
                    _logger.LogInformation(string.Format(_localizer["Added '{0}' to Roles"], roleName));
                }
            }
        }).GetAwaiter().GetResult();
    }
    private void AddSuperAdmin()
    {
        Task.Run(async () =>
        {
            // Check if Role Exists
            var superAdminRole = new Role(Roles.SuperAdmin);
            var superAdminRoleInDb = await _roleManager.FindByNameAsync(Roles.SuperAdmin);
            if (superAdminRoleInDb == null)
            {
                await _roleManager.CreateAsync(superAdminRole);
                superAdminRoleInDb = await _roleManager.FindByNameAsync(Roles.SuperAdmin);
            }

            // Check if User Exists
            var superUser = new User
            {
                FirstName = "Sras",
                LastName = "Chhin",
                Email = "superadmin@test.com",
                UserName = "superadmin",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                IsActive = true
            };
            var superUserInDb = await _userManager.FindByEmailAsync(superUser.Email);
            if (superUserInDb == null)
            {
                await _userManager.CreateAsync(superUser, Users.DefaultPassword);
                var result = await _userManager.AddToRoleAsync(superUser, Roles.SuperAdmin);
                if (result.Succeeded)
                {
                    _logger.LogInformation(_localizer["Seeded Default SuperAdmin User."]);
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        _logger.LogError(error.Description);
                    }
                }
            }

            foreach (string permission in typeof(Permissions).GetNestedClassesStaticStringValues())
            {
                await _roleManager.AddPermissionClaimAsync(superAdminRoleInDb, permission);
            }
        }).GetAwaiter().GetResult();
    }

    private void AddBasicUser()
    {
        Task.Run(async () =>
        {
            // Check if Role Exists
            var basicRole = new Role(Roles.BasicUser);
            var basicRoleInDb = await _roleManager.FindByNameAsync(Roles.BasicUser);
            if (basicRoleInDb == null)
            {
                await _roleManager.CreateAsync(basicRole);
                basicRoleInDb = await _roleManager.FindByNameAsync(Roles.BasicUser);
            }

            // Check if User Exists
            var basicUser = new User
            {
                FirstName = "John",
                LastName = "Doe",
                Email = "staff@test.com",
                UserName = "staff",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                IsActive = true
            };
            var basicUserInDb = await _userManager.FindByEmailAsync(basicUser.Email);
            if (basicUserInDb == null)
            {
                await _userManager.CreateAsync(basicUser, Users.DefaultPassword);
                await _userManager.AddToRoleAsync(basicUser, Roles.BasicUser);
                _logger.LogInformation(_localizer["Seeded Default Staff."]);
            }
        }).GetAwaiter().GetResult();
    }

    private void AddCambodiaGazetteers()
    {
        Task.Run(async () =>
        {
            string? path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            if (!_context.Provinces.Any())
            {
                string data = await File.ReadAllTextAsync(path + @"/Data/SeedData/provinces.json");
                var provinces = JsonSerializer.Deserialize<List<Province>>(data);

                if (provinces != null)
                {
                    foreach (var province in provinces)
                    {
                        await _context.Provinces.AddAsync(province);
                    }
                }
                await _context.SaveChangesAsync();

                _logger.LogInformation(_localizer["Seeded provinces."]);
            }
        }).GetAwaiter().GetResult();

        Task.Run(async () =>
        {
            string? path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            if (!_context.Districts.Any())
            {
                string data = await File.ReadAllTextAsync(path + @"/Data/SeedData/districts.json");
                var districts = JsonSerializer.Deserialize<List<District>>(data);

                if (districts != null)
                {
                    foreach (var district in districts)
                    {
                        await _context.Districts.AddAsync(district);
                    }
                }

                await _context.SaveChangesAsync();

                _logger.LogInformation(_localizer["Seeded districts."]);
            }
        }).GetAwaiter().GetResult();

        Task.Run(async () =>
        {
            string? path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            if (!_context.Communes.Any())
            {
                string data = await File.ReadAllTextAsync(path + @"/Data/SeedData/communes.json");
                var communes = JsonSerializer.Deserialize<List<Commune>>(data);

                if (communes != null)
                {
                    foreach (var commune in communes)
                    {
                        await _context.Communes.AddAsync(commune);
                    }
                }
                await _context.SaveChangesAsync();

                _logger.LogInformation(_localizer["Seeded communes."]);
            }
        }).GetAwaiter().GetResult();

        Task.Run(async () =>
        {
            string? path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            if (!_context.Villages.Any())
            {
                string data = await File.ReadAllTextAsync(path + @"/Data/SeedData/villages.json");
                var villages = JsonSerializer.Deserialize<List<Village>>(data);

                if (villages != null)
                {
                    foreach (var village in villages)
                    {
                        await _context.Villages.AddAsync(village);
                    }
                }
                await _context.SaveChangesAsync();

                _logger.LogInformation(_localizer["Seeded villages."]);
            }
        }).GetAwaiter().GetResult();
    }
}