namespace Api.Books
{
    public static class BookEndpoints
    {
        public static void MapBookEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("/api/books");

            group.MapGet("/", (IBookRepository repo) =>
            {
                return Results.Ok(repo.GetAll());
            });
        }
    }
}
