namespace API.DTOs;

public class FileUploadDto
{
    public string Name { get; set; } = default!;
    public string Extension { get; set; } = default!;
    public string Data { get; set; } = default!;
}

public enum FileType
{
    [Description(".jpg,.png,.jpeg")]
    Image
}