namespace API.Extensions;
public static class ModelBuilderExtensions
{
    public static void ApplyIdentityConfiguration(this ModelBuilder builder)
    {
    
        builder.Entity<User>(entity =>
        {
            entity.ToTable(name: "Users");
        });

        builder.Entity<Role>(entity =>
        {
            entity.ToTable(name: "Roles");
        });
        
        builder.Entity<UserRole>(entity =>
        {
            entity.ToTable("UserRoles");
        });

        builder.Entity<User>()
            .HasMany(ur => ur.UserRoles)
            .WithOne(u => u.User)
            .HasForeignKey(ur => ur.UserId)
            .IsRequired();

        builder.Entity<Role>()
            .HasMany(ur => ur.UserRoles)
            .WithOne(u => u.Role)
            .HasForeignKey(ur => ur.RoleId)
            .IsRequired();

        builder.Entity<RoleClaim>(entity =>
        {
            entity.ToTable(name: "RoleClaims");

            entity.HasOne(d => d.Role)
                .WithMany(p => p.RoleClaims)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        builder.Entity<IdentityUserClaim<int>>(entity =>
        {
            entity.ToTable("UserClaims");
        });

        builder.Entity<IdentityUserLogin<int>>(entity =>
        {
            entity.ToTable("UserLogins");
        });

        builder.Entity<IdentityUserToken<int>>(entity =>
        {
            entity.ToTable("UserTokens");
        });
    }

    public static void ApplyApplicationConfiguration(this ModelBuilder builder)
    {
        foreach (var property in builder.Model.GetEntityTypes()
            .SelectMany(t => t.GetProperties())
            .Where(p => p.ClrType == typeof(decimal) || p.ClrType == typeof(decimal?)))
            {
                property.SetPrecision(18);
                property.SetScale(6);
            }
    }

    public static void ApplyGlobalFilters<TInterface>(this ModelBuilder modelBuilder, Expression<Func<TInterface, bool>> expression)
    {
        var entities = modelBuilder.Model
            .GetEntityTypes()
            .Where(e => e.ClrType.GetInterface(typeof(TInterface).Name) != null)
            .Select(e => e.ClrType);
        foreach (var entity in entities)
        {
            var newParam = Expression.Parameter(entity);
            var newbody = ReplacingExpressionVisitor.Replace(expression.Parameters.Single(), newParam, expression.Body);
            modelBuilder.Entity(entity).HasQueryFilter(Expression.Lambda(newbody, newParam));
        }
    }

    public static void ApplyGazetteersConfiguration(this ModelBuilder builder)
    {
        builder.Entity<Province>().HasKey(p => p.Code);
        builder.Entity<Province>().Property(p => p.Code).ValueGeneratedNever();
        builder.Entity<District>().HasKey(d => d.Code);
        builder.Entity<District>().Property(d => d.Code).ValueGeneratedNever();
        builder.Entity<Commune>().HasKey(c => c.Code);
        builder.Entity<Commune>().Property(c => c.Code).ValueGeneratedNever();
        builder.Entity<Village>().HasKey(v => v.Code);
        builder.Entity<Village>().Property(v => v.Code).ValueGeneratedNever();
    }
}
