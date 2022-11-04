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
    [DisplayName("Provinces")]
    [Description("Provinces Permissions")]
    public static class Provinces
    {
        public const string View = "Permissions.Provinces.View";
        public const string Create = "Permissions.Provinces.Create";
        public const string Edit = "Permissions.Provinces.Edit";
        public const string Delete = "Permissions.Provinces.Delete";
    }

    [DisplayName("Districts")]
    [Description("Districts Permissions")]
    public static class Districts
    {
        public const string View = "Permissions.Districts.View";
        public const string Create = "Permissions.Districts.Create";
        public const string Edit = "Permissions.Districts.Edit";
        public const string Delete = "Permissions.Districts.Delete";
    }

    [DisplayName("Communes")]
    [Description("Communes Permissions")]
    public static class Communes
    {
        public const string View = "Permissions.Communes.View";
        public const string Create = "Permissions.Communes.Create";
        public const string Edit = "Permissions.Communes.Edit";
        public const string Delete = "Permissions.Communes.Delete";
    }

    [DisplayName("Villages")]
    [Description("Villages Permissions")]
    public static class Villages
    {
        public const string View = "Permissions.Villages.View";
        public const string Create = "Permissions.Villages.Create";
        public const string Edit = "Permissions.Villages.Edit";
        public const string Delete = "Permissions.Villages.Delete";
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