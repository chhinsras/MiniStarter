namespace API.Services;
public class SystemDateTimeService : IDateTimeService
{
    public DateTime NowUtc => DateTime.UtcNow;
}