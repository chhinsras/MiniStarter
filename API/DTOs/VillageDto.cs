namespace API.DTOs;
public class VillageDto
{
    public string? Type { get; set; }
    public int Code { get; set; }
    public int CommuneCode { get; set; }
    public Commune? Commune { get; set; }
    public string? NameKH { get; set; }
    public string? NameEN { get; set; }
}