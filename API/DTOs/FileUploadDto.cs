namespace API.DTOs;

public class FileUploadDto
{
    [Required] public string Name { get; set; } = default!;
    [Required] public string Extension { get; set; } = default!;
    [Required] public string Data { get; set; } = default!;
}

public enum FileType
{
    [Description(".jpg,.png,.jpeg")]
    Image
}