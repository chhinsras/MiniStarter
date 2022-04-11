namespace API.DTOs;

public class AuditDto
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string? Type { get; set; }
    public string? TableName { get; set; }
    public DateTime DateTime { get; set; }
    public string? OldValues { get; set; }
    public string? NewValues { get; set; }
    public string? AffectedColumns { get; set; }
    public string? PrimaryKey { get; set; }
}

public class AuditParams : PaginationParams
    {
        // public string? OrderBy { get; set; }
        // public string? SearchTerm { get; set; }
    }