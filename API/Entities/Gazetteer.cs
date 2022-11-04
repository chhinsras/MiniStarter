namespace API.Entities;
public class Province
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public virtual ICollection<District>? Districts { get; set; }
}

public class District
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int ProvinceCode { get; set; }
    public virtual Province? Province { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public virtual ICollection<Commune>? Communes { get; set; }
}

public class Commune
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int DistrictCode { get; set; }
    public virtual District? District { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public virtual ICollection<Village>? Villages { get; set; }
}

public class Village
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int CommuneCode { get; set; }
    public virtual Commune? Commune { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
}