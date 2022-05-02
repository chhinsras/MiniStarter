namespace API.Extensions
{
    public static class UserExtensions
    {
        public static IQueryable<User> Sort(this IQueryable<User> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy)) return query.OrderByDescending(p => p.Id); 

            if (orderBy.StartsWith("firstName")) query = orderBy.Contains("asc") ? query.OrderBy(x => x.FirstName) : query.OrderByDescending(x => x.FirstName);
            if (orderBy.StartsWith("lastName")) query = orderBy.Contains("asc") ? query.OrderBy(x => x.LastName) : query.OrderByDescending(x => x.LastName);
            if (orderBy.StartsWith("userName")) query = orderBy.Contains("asc") ? query.OrderBy(x => x.UserName) : query.OrderByDescending(x => x.UserName);
            if (orderBy.StartsWith("id")) query = orderBy.Contains("asc") ? query.OrderBy(x => x.Id) : query.OrderByDescending(x => x.Id);

            return query;
        }

        public static IQueryable<User> Search(this IQueryable<User> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(
                p => p.Id!.ToString().Contains(lowerCaseSearchTerm) || p.UserName!.ToLower().Contains(lowerCaseSearchTerm) ||
                p.FirstName!.ToLower().Contains(lowerCaseSearchTerm) || p.LastName!.ToLower().Contains(lowerCaseSearchTerm));
        }
    }
}