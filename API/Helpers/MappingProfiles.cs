namespace API.Helper;
public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        // General Mapping
        CreateMap<AuditTrail, AuditDto>().ReverseMap();
        CreateMap<RoleClaimDto, RoleClaim>()
            .ForMember(nameof(RoleClaim.ClaimType), opt => opt.MapFrom(c => c.Type))
            .ForMember(nameof(RoleClaim.ClaimValue), opt => opt.MapFrom(c => c.Value))
            .ReverseMap();
        CreateMap<RoleClaimRequest, RoleClaim>()
            .ForMember(nameof(RoleClaim.ClaimType), opt => opt.MapFrom(c => c.Type))
            .ForMember(nameof(RoleClaim.ClaimValue), opt => opt.MapFrom(c => c.Value))
            .ReverseMap();

        CreateMap<RoleDto, Role>().ReverseMap();
        CreateMap<UserDto, User>().ReverseMap();
        
        // Gazetteers
        CreateMap<Province, ProvinceDto>().ReverseMap();
        CreateMap<District, DistrictDto>().ReverseMap();
        CreateMap<Commune, CommuneDto>().ReverseMap();
        CreateMap<Village, VillageDto>().ReverseMap();

        // Feature Mapping
    }
}