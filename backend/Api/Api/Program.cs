using Api.Books;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton<IBookRepository, BookRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.MapGet("/hello", () =>
{
    return "Hello, world!";
});

app.MapBookEndpoints();

app.Run();
