namespace API.DTOs;
public class DistrictDto
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int ProvinceCode { get; set; }
    public Province? Province { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public ICollection<Commune>? Communes { get; set; }
}