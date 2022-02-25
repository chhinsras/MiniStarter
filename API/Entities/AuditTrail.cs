namespace API.Entities;
public class AuditTrail
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

public class AuditEntry
{
    public AuditEntry(EntityEntry entry)
    {
        Entry = entry;
    }

    public EntityEntry Entry { get; }
    public int UserId { get; set; }
    public string? TableName { get; set; }
    public Dictionary<string, object> KeyValues { get; } = new();
    public Dictionary<string, object> OldValues { get; } = new();
    public Dictionary<string, object> NewValues { get; } = new();
    public List<PropertyEntry> TemporaryProperties { get; } = new();
    public TrailType TrailType { get; set; }
    public List<string> ChangedColumns { get; } = new();
    public bool HasTemporaryProperties => TemporaryProperties.Count > 0;

    public AuditTrail ToAuditTrail() =>
    new()
    {
        UserId = UserId,
        Type = TrailType.ToString(),
        TableName = TableName,
        DateTime = DateTime.UtcNow,
        PrimaryKey = JsonSerializer.Serialize(KeyValues),
        OldValues = OldValues.Count == 0 ? null : JsonSerializer.Serialize(OldValues),
        NewValues = NewValues.Count == 0 ? null : JsonSerializer.Serialize(NewValues),
        AffectedColumns = ChangedColumns.Count == 0 ? null : JsonSerializer.Serialize(ChangedColumns)
    };
}

public enum TrailType : byte
{
    None = 0,
    Create = 1,
    Update = 2,
    Delete = 3
}