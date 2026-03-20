namespace Api.Paging
{
    public static class PagedExtention
    {
        public static PagedResult<T> ToPagedResult<T>(this IEnumerable<T> source, int pageSize = 5, int page = 1)
        {
            int total = source.Count();
            return new PagedResult<T>()
            {
                Items = source.Skip((page - 1) * pageSize).Take(pageSize).ToList(),
                PageSize = pageSize,
                Page = page,
                TotalCount = total,
                TotalPage = (int)Math.Ceiling(total / (double)pageSize)
            };
        }
    }
}
