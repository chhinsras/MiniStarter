namespace API.Interfaces;
public interface IDatabaseSeeder : ITransientService
{
    void Initialize();
}