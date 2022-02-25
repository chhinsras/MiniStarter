#nullable disable
namespace API.Data;
public class DataContext : AuditableContext
{
    private readonly ICurrentUserService _currentUserService;
    private readonly IDateTimeService _dateTimeService;

    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DataContext(DbContextOptions options, ICurrentUserService currentUserService, IDateTimeService dateTimeService) : base(options)
    {
        _currentUserService = currentUserService;
        _dateTimeService = dateTimeService;
    }

    public DbSet<Village> Villages { get; set; }
    public DbSet<Commune> Communes { get; set; }
    public DbSet<District> Districts { get; set; }
    public DbSet<Province> Provinces { get; set; }

    public async Task<int> SaveChangesAsync()
    {
        foreach (var entry in ChangeTracker.Entries<AuditableEntity>().ToList())
        {
            var currentUserId = _currentUserService.GetUserId().ToString();
            switch (entry.State)
            {
                case EntityState.Added:
                    entry.Entity.CreatedOn = _dateTimeService.NowUtc;
                    entry.Entity.CreatedBy = currentUserId;
                    break;

                case EntityState.Modified:
                    entry.Entity.LastModifiedOn = _dateTimeService.NowUtc;
                    entry.Entity.LastModifiedBy = currentUserId;
                    break;

                case EntityState.Deleted:
                    if (entry.Entity is ISoftDelete softDelete)
                    {
                        softDelete.DeletedBy = currentUserId;
                        softDelete.DeletedOn = DateTime.UtcNow;
                        entry.State = EntityState.Modified;
                    }
                break;
            }
        }
        if (_currentUserService.GetUserId().ToString() == null)
        {
            return await base.SaveChangesAsync();
        }
        else
        {
            return await base.SaveChangesAsync(_currentUserService.GetUserId());
        }
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
        builder.ApplyIdentityConfiguration();
        builder.ApplyGazetteersConfiguration();
        builder.ApplyApplicationConfiguration();
        //builder.ApplyUtcDateTimeConverter();
        builder.ApplyGlobalFilters<ISoftDelete>(s => s.DeletedOn == null);
    }
}