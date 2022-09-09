namespace API.DTOs;
public class ProvinceDto
{
    public string Type { get; set; } = default!;
    public int Code { get; set; }
    public string NameKH { get; set; } = default!;
    public string NameEN { get; set; } = default!;
    public ICollection<District>? Districts { get; set; }
}