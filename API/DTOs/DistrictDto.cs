namespace API.DTOs;
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