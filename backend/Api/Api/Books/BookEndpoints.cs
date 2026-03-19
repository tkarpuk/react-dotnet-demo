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

            group.MapPost("/", (Book book, IBookRepository repo) =>
            {
                var errors = BookValidator.Validate(book);
                if (errors.Count > 0)
                    return Results.ValidationProblem(errors);

                var createdBook = repo.Create(book);

                return Results.Created($"/api/books/{createdBook.Id}", createdBook);
            });

            group.MapPut("/{id:int}", (int id, Book book, IBookRepository repo) =>
            {
                var errors = BookValidator.Validate(book);
                if (errors.Count > 0)
                    return Results.ValidationProblem(errors);

                bool result = repo.Update(id, book);

                return result ? Results.NoContent() : Results.NotFound();
            });

            group.MapDelete("/{id:int}", (int id, IBookRepository repo) =>
            {
                bool result = repo.Delete(id);

                return result ? Results.NoContent() : Results.NotFound();
            });
        }
    }
}
