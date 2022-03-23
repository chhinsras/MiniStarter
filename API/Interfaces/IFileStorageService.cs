namespace APi.Interfaces;

public interface IFileStorageService : ITransientService
{
    public Task<string> UploadAsync<T>(FileUploadDto? request, FileType supportedFileType)
    where T : class;

    public void Remove(string? path);
}