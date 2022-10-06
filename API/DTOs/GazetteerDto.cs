namespace API.DTOs;

public class ProvinceDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
    public ICollection<District>? Districts { get; set; }
}

public class DistrictDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int ProvinceCode { get; set; }
    public Province? Province { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
    public ICollection<Commune>? Communes { get; set; }
}

public class CommuneDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int DistrictCode { get; set; }
    public District? District { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
    public ICollection<Village>? Villages { get; set; }
}

public class VillageDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int CommuneCode { get; set; }
    public Commune? Commune { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
}