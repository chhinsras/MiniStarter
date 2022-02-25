namespace API.Interfaces;
public interface IDateTimeService : ITransientService
{
    DateTime NowUtc { get; }
}