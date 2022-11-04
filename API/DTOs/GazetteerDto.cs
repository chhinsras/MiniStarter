namespace API.DTOs;

public class ProvinceDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
}

public class DistrictDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int ProvinceCode { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
}

public class CommuneDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int DistrictCode { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
}

public class VillageDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public int CommuneCode { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
}