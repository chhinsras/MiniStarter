namespace API.DTOs;
public class ProvinceDto
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public ICollection<District>? Districts { get; set; }
}