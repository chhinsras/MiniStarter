namespace API.DTOs;
public class CommuneDto
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int DistrictCode { get; set; }
    public District? District { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
    public ICollection<Village>? Villages { get; set; }
}