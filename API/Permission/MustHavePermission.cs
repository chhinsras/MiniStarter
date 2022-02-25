namespace API.Permission;
public class MustHavePermission : AuthorizeAttribute
{
    public MustHavePermission(string permission)
    {
        Policy = permission;
    }
}