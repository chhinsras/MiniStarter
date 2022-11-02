using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

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
            .HasForeignKey(ur => ur.UserId);
            // .IsRequired();

        builder.Entity<Role>()
            .HasMany(ur => ur.UserRoles)
            .WithOne(u => u.Role)
            .HasForeignKey(ur => ur.RoleId);
            // .IsRequired();

        builder.Entity<UserRole>()
            .HasOne(u => u.User)
            .WithMany(ur => ur.UserRoles)
            .HasForeignKey(ur => ur.UserId)
            .IsRequired();
        builder.Entity<UserRole>()
            .HasOne(u => u.Role)
            .WithMany(ur => ur.UserRoles)
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

public static class UtcDateAnnotation
    {
        private const String IsUtcAnnotation = "IsUtc";
        private static readonly ValueConverter<DateTime, DateTime> UtcConverter =
          new ValueConverter<DateTime, DateTime>(v => v, v => DateTime.SpecifyKind(v, DateTimeKind.Utc));

        private static readonly ValueConverter<DateTime?, DateTime?> UtcNullableConverter =
          new ValueConverter<DateTime?, DateTime?>(v => v, v => v == null ? v : DateTime.SpecifyKind(v.Value, DateTimeKind.Utc));

        public static PropertyBuilder<TProperty> IsUtc<TProperty>(this PropertyBuilder<TProperty> builder, Boolean isUtc = true) =>
          builder.HasAnnotation(IsUtcAnnotation, isUtc);

        public static Boolean IsUtc(this IMutableProperty property) =>
          ((Boolean?)property.FindAnnotation(IsUtcAnnotation)?.Value) ?? true;

        /// <summary>
        /// Make sure this is called after configuring all your entities.
        /// </summary>
        public static void ApplyUtcDateTimeConverter(this ModelBuilder builder)
        {
            foreach (var entityType in builder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    if (!property.IsUtc())
                    {
                        continue;
                    }

                    if (property.ClrType == typeof(DateTime))
                    {
                        property.SetValueConverter(UtcConverter);
                    }

                    if (property.ClrType == typeof(DateTime?))
                    {
                        property.SetValueConverter(UtcNullableConverter);
                    }
                }
            }
        }
    }
