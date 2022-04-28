namespace API.Entities;
public class AuditableEntity : BaseEntity, ISoftDelete
{
    public string? CreatedBy { get; set; }
    public DateTime CreatedOn { get; set; }
    public string? LastModifiedBy { get; set; }
    public DateTime? LastModifiedOn { get; set; }
    public string? DeletedBy { get; set; }
    public DateTime? DeletedOn { get; set; }
    protected AuditableEntity()
    {
        CreatedOn = DateTime.UtcNow;
        LastModifiedOn = DateTime.UtcNow;
    }
}

public class BaseEntity
{
    [Required]
    public int Id { get; set; }
}

public interface ISoftDelete
{
    DateTime? DeletedOn { get; set; }
    string? DeletedBy { get; set; }
}