using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace API.Services;

public class LocalFileStorageService
{
    public Task<string> UploadAsync(FileUploadDto fileUploadDto)
    {
       
            if (fileUploadDto.File.Length > 0)
            {
                string folder = fileUploadDto.UploadType.ToDescriptionString();
                if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX)) folder = folder.Replace(@"\", "/");
                string folderName = Path.Combine("Files", folder);
                string pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                bool exists = Directory.Exists(pathToSave);
                if (!exists)
                {
                    Directory.CreateDirectory(pathToSave);
                }

                string fileName = fileUploadDto.File.FileName.Trim('"');
                string fullPath = Path.Combine(pathToSave, fileName);
                string dbPath = Path.Combine(folderName, fileName);
                if (File.Exists(dbPath))
                {
                    dbPath = NextAvailableFilename(dbPath);
                    fullPath = NextAvailableFilename(fullPath);
                }

                if (fileUploadDto.File.ContentType == "image/png" || 
                    fileUploadDto.File.ContentType == "image/jpeg")
                {
                    var resizeOptions = new ResizeOptions
                    {
                        Size = new Size(500, 500),
                        Mode = ResizeMode.Crop
                    };
                    var img = Image.Load(fileUploadDto.File.OpenReadStream());
                    img.Mutate(x => x.Resize(resizeOptions));
                    img.Save(fullPath);
                    return Task.FromResult(dbPath);
                } else {
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        fileUploadDto.File.CopyToAsync(stream).Wait();
                    }
                    return Task.FromResult(dbPath);
                }
            }
            else
            {
                return Task.FromResult(string.Empty);
            }
    }

    private static string numberPattern = " ({0})";

    private static string NextAvailableFilename(string path)
    {
        // Short-cut if already available
        if (!File.Exists(path))
        {
            return path;
        }

        // If path has extension then insert the number pattern just before the extension and return next filename
        if (Path.HasExtension(path))
        {
            return GetNextFilename(path.Insert(path.LastIndexOf(Path.GetExtension(path), StringComparison.Ordinal), numberPattern));
        }

        // Otherwise just append the pattern to the path and return next filename
        return GetNextFilename(path + numberPattern);
    }

    private static string GetNextFilename(string pattern)
    {
        string tmp = string.Format(pattern, 1);

        // if (tmp == pattern)
        // throw new ArgumentException("The pattern must include an index place-holder", "pattern");

        if (!File.Exists(tmp))
        {
            return tmp; // short-circuit if no matches
        }

        int min = 1, max = 2; // min is inclusive, max is exclusive/untested

        while (File.Exists(string.Format(pattern, max)))
        {
            min = max;
            max *= 2;
        }

        while (max != min + 1)
        {
            int pivot = (max + min) / 2;
            if (File.Exists(string.Format(pattern, pivot)))
            {
                min = pivot;
            }
            else
            {
                max = pivot;
            }
        }

        return string.Format(pattern, max);
    }

    public void Remove(string fileUrl, UploadType uploadType)
    {
        if (fileUrl != null)
        {
            string folder = uploadType.ToDescriptionString();
            if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))folder = folder.Replace(@"\", "/");
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), fileUrl);
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }
    }
}
