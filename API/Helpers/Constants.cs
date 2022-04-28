namespace API.Helpers;


public static class DatabaseProvider 
{
    public const string MSSQL = "MSSQL";
    public const string POSGRESSQL = "POSGRESSQL";
}

public static class CustomClaimTypes
{
    public const string Permission = "Permission";
    public const string Fullname = "fullName";
    public const string ImageUrl = "imageUrl";
    public const string IpAddress = "ipAddress";
    public const string Expiration = "exp";
}

public static class Users
{
    public const string DefaultPassword = "Pa$$w0rd";
}

public static class Roles
{
    public const string SuperAdmin = "SuperAdmin";
    public const string Admin = "Admin";
    public const string BasicUser = "BasicUser";
}

public static class Reports
{
    public const string InvoiceReport = "Templates/InvoiceTemplate";
    public const string TableReport = "Templates/TableTemplate";
    
}
