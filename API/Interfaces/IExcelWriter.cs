namespace API.Interfaces;
public interface IExcelWriter : ITransientService
{
    Stream WriteToStream<T>(IList<T> data);
}