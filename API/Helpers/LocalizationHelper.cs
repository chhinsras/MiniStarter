#nullable disable
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;

namespace API.Helpers;
public class JsonStringLocalizer : IStringLocalizer
{
    private readonly IDistributedCache _cache;
    private readonly Newtonsoft.Json.JsonSerializer _serializer = new();
    public JsonStringLocalizer(IDistributedCache cache)
    {
        _cache = cache;
    }
    public LocalizedString this[string name]
    {
        get
        {
            string value = GetString(name);
            return new LocalizedString(name, value ?? name, value == null);
        }
    }
    public LocalizedString this[string name, params object[] arguments]
    {
        get
        {
            var actualValue = this[name];
            return !actualValue.ResourceNotFound
                ? new LocalizedString(name, string.Format(actualValue.Value, arguments), false)
                : actualValue;
        }
    }
    public IEnumerable<LocalizedString> GetAllStrings(bool includeParentCultures)
    {
        string filePath = $"Documents/Resources/{Thread.CurrentThread.CurrentCulture.Name}.json";
        using (var str = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read))
        using (var sReader = new StreamReader(str))
        using (var reader = new JsonTextReader(sReader))
        {
            while (reader.Read())
            {
                if (reader.TokenType != JsonToken.PropertyName)
                    continue;
                string key = (string)reader.Value;
                reader.Read();
                string value = _serializer.Deserialize<string>(reader);
                yield return new LocalizedString(key, value, false);
            }
        }
    }
    private string GetString(string key)
    {
        string relativeFilePath = $"Documents/Resources/{Thread.CurrentThread.CurrentCulture.Name}.json";
        string fullFilePath = Path.GetFullPath(relativeFilePath);
        if (File.Exists(fullFilePath))
        {
            string cacheKey = $"locale_{Thread.CurrentThread.CurrentCulture.Name}_{key}";
            string cacheValue = _cache.GetString(cacheKey);
            if (!string.IsNullOrEmpty(cacheValue)) return cacheValue;
            string result = GetValueFromJSON(key, Path.GetFullPath(relativeFilePath));
            if (!string.IsNullOrEmpty(result)) _cache.SetString(cacheKey, result);
            return result;
        }
        return default(string);
    }
    private string GetValueFromJSON(string propertyName, string filePath)
    {
        if (propertyName == null) return default;
        if (filePath == null) return default;
        using (var str = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read))
        using (var sReader = new StreamReader(str))
        using (var reader = new JsonTextReader(sReader))
        {
            while (reader.Read())
            {
                if (reader.TokenType == JsonToken.PropertyName && (string)reader.Value == propertyName)
                {
                    reader.Read();
                    return _serializer.Deserialize<string>(reader);
                }
            }
            return default;
        }
    }
}

public class JsonStringLocalizerFactory : IStringLocalizerFactory
{
    private readonly IDistributedCache _cache;
    public JsonStringLocalizerFactory(IDistributedCache cache)
    {
        _cache = cache;
    }
    public IStringLocalizer Create(Type resourceSource) =>
        new JsonStringLocalizer(_cache);
    public IStringLocalizer Create(string baseName, string location) =>
        new JsonStringLocalizer(_cache);
}


public class MultilanguagesIdentityErrorDescriber : IdentityErrorDescriber
{
    private readonly IStringLocalizer<MultilanguagesIdentityErrorDescriber> _localizer;

    public MultilanguagesIdentityErrorDescriber(IStringLocalizer<MultilanguagesIdentityErrorDescriber> localizer)
    {
        _localizer = localizer;
    }

    public override IdentityError DefaultError() => new() { Code = nameof(DefaultError), Description = _localizer["Idenity.DefaultError"] };
    public override IdentityError ConcurrencyFailure() => new() { Code = nameof(ConcurrencyFailure), Description = _localizer["Idenity.ConcurrencyFailure"] };
    public override IdentityError PasswordMismatch() => new() { Code = nameof(PasswordMismatch), Description = _localizer["Idenity.PasswordMismatch"] };
    public override IdentityError InvalidToken() => new() { Code = nameof(InvalidToken), Description = _localizer["Idenity.InvalidToken"] };
    public override IdentityError LoginAlreadyAssociated() => new() { Code = nameof(LoginAlreadyAssociated), Description = _localizer["Idenity.LoginAlreadyAssociated"] };
    public override IdentityError InvalidUserName(string userName) => new() { Code = nameof(InvalidUserName), Description =string.Format(_localizer["Identity.InvalidUserName"], userName) };
    public override IdentityError InvalidEmail(string email) => new() { Code = nameof(InvalidEmail), Description = string.Format(_localizer["Identity.InvalidEmail"], email) };
    public override IdentityError DuplicateUserName(string userName) => new() { Code = nameof(DuplicateUserName), Description = string.Format(_localizer["Identity.DuplicateUserName"], userName) };
    public override IdentityError DuplicateEmail(string email) => new() { Code = nameof(DuplicateEmail), Description = string.Format(_localizer["Identity.DuplicateEmail"], email) };
    public override IdentityError InvalidRoleName(string role) => new() { Code = nameof(InvalidRoleName), Description = string.Format(_localizer["Identity.InvalidRoleName"], role) };
    public override IdentityError DuplicateRoleName(string role) => new() { Code = nameof(DuplicateRoleName), Description = string.Format(_localizer["Identity.DuplicateRoleName"], role) };
    public override IdentityError UserAlreadyHasPassword() => new() { Code = nameof(UserAlreadyHasPassword), Description = _localizer["Idenity.UserAlreadyHasPassword"] };
    public override IdentityError UserLockoutNotEnabled() => new() { Code = nameof(UserLockoutNotEnabled), Description = _localizer["Idenity.UserLockoutNotEnabled"] };
    public override IdentityError UserAlreadyInRole(string role) => new() { Code = nameof(UserAlreadyInRole), Description = string.Format(_localizer["Identity.UserAlreadyInRole"], role) };
    public override IdentityError UserNotInRole(string role) => new() { Code = nameof(UserNotInRole), Description = string.Format(_localizer["Identity.UserNotInRole"], role) };
    public override IdentityError PasswordTooShort(int length) => new() { Code = nameof(PasswordTooShort), Description = string.Format(_localizer["Identity.PasswordTooShort"], length) };
    public override IdentityError PasswordRequiresNonAlphanumeric() => new() { Code = nameof(PasswordRequiresNonAlphanumeric), Description = _localizer["Idenity.PasswordRequiresNonAlphanumeric"] };
    public override IdentityError PasswordRequiresDigit() => new() { Code = nameof(PasswordRequiresDigit), Description = _localizer["Idenity.PasswordRequiresDigit"] };
    public override IdentityError PasswordRequiresLower() => new() { Code = nameof(PasswordRequiresLower), Description = _localizer["Idenity.PasswordRequiresLower"] };
    public override IdentityError PasswordRequiresUpper() => new() { Code = nameof(PasswordRequiresUpper), Description = _localizer["Idenity.PasswordRequiresUpper"] };
}

