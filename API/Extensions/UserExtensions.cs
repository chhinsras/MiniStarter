namespace API.Extensions
{
    public static class UserExtensions
    {
        public static IQueryable<User> Sort(this IQueryable<User> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy)) return query.OrderByDescending(p => p.Id); 

            query = orderBy switch
            {
                "firstName" => query.OrderBy(p => p.FirstName),
                "lastName" => query.OrderBy(p => p.LastName),
                _ => query.OrderByDescending(p => p.Id)
            };

            return query;
        }

        public static IQueryable<User> Search(this IQueryable<User> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.FirstName!.ToLower().Contains(lowerCaseSearchTerm) || p.LastName!.ToLower().Contains(lowerCaseSearchTerm));
        }
    }
}