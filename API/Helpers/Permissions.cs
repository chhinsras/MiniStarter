namespace API.Helpers;
public static class Permissions
{
    #region Application
    [DisplayName("Account")]
    [Description("Account Permissions")]
    public static class Account
    {
        public const string Register = "Permissions.Account.Register";
        public const string Login = "Permissions.Account.Login";
    }
    [DisplayName("Audit")]
    [Description("Audit Permissions")]
    public static class Audit
    {
        public const string View = "Permissions.Audit.View";
    }

    [DisplayName("Users")]
    [Description("Users Permissions")]
    public static class Users
    {
        public const string View = "Permissions.Users.View";
        public const string Create = "Permissions.Users.Create";
        public const string Update = "Permissions.Users.Update";
        public const string Delete = "Permissions.Users.Delete";
    }

    [DisplayName("Roles")]
    [Description("Roles Permissions")]
    public static class Roles
    {
        public const string View = "Permissions.Roles.View";
        public const string Create = "Permissions.Roles.Create";
        public const string Update = "Permissions.Roles.Update";
        public const string Delete = "Permissions.Roles.Delete";
    }

    [DisplayName("RoleClaims")]
    [Description("RoleClaims Permissions")]
    public static class RoleClaims
    {
        public const string View = "Permissions.RoleClaims.View";
        public const string Create = "Permissions.RoleClaims.Create";
        public const string Update = "Permissions.RoleClaims.Update";
        public const string Delete = "Permissions.RoleClaims.Delete";
    }
    #endregion

    #region Gazetteer Permissions
    [DisplayName("Gazetteer")]
    [Description("Gazetteer Permissions")]
    public static class Gazetteer
    {
        public const string Province = "Permissions.Gazetteer.Province";
        public const string District = "Permissions.Gazetteer.District";
        public const string Commune = "Permissions.Gazetteer.Commune";
        public const string Village = "Permissions.Gazetteer.Village";
    }

    #endregion

    #region Features
    #endregion

    #region Reports
    public static class Reports
    {
        public const string Dashboard = "Permissions.Reports.Dashboard";
        public const string Invoice = "Permissions.Reports.Invoice";
        public const string Table = "Permission.Repports.Table";
    }
    #endregion
}
