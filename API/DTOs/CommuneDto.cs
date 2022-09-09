namespace API.DTOs;
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