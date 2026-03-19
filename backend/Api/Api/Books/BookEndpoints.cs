using Microsoft.AspNetCore.Builder;

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

            group.MapGet("/{id:int}", (int id, IBookRepository repo) =>
            {
                var book = repo.GetById(id);

                return book is null
                    ? Results.NotFound()
                    : Results.Ok(book);
            });
        }
    }
}
