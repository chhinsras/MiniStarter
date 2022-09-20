namespace API.DTOs;

public class FileUploadDto
{
    [Required] public IFormFile File { get; set; } = default!;
    [Required] public UploadType UploadType { get; set; }

}

public class FileDeleteDto
{
    public int FileId { get; set; }
    public UploadType UploadType { get; set; }
}

public enum FileType
{
    [Description(".jpg,.png,.jpeg")]
    Image
}

public enum UploadType : byte
{
    [Description(@"Images\UserPhotos")]
    UserPhoto,
    [Description(@"Images\Products")]
    Product,
    [Description(@"Images\Brands")]
    Brand,
}