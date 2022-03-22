namespace API.Helpers;
public class MapsterSettings
{
    public static void Configure()
    {
        // here we will define the type conversion / Custom-mapping
        // More details at https://github.com/MapsterMapper/Mapster/wiki/Custom-mapping

        // This one is actually not necessary as it's mapped by convention
        // TypeAdapterConfig<Product, ProductDto>.NewConfig().Map(dest => dest.BrandName, src => src.Brand.Name);
        TypeAdapterConfig<UserDetailDto, User>.NewConfig().IgnoreNullValues(true);
         TypeAdapterConfig<RoleClaim, RoleClaimDto>.NewConfig()
            .Map(dest => dest.Type, src => src.ClaimType)
            .Map(dest => dest.Value, src => src.ClaimValue);
        TypeAdapterConfig<RoleClaim, PermissionDto>.NewConfig()
            .Map(dest => dest.Permission, src => src.ClaimValue);
    }
}