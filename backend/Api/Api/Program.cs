using Api.Books;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton<IBookRepository, BookRepository>();
builder.Services.AddCors(o => o.AddPolicy("demo", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseCors("demo");
//app.UseHttpsRedirection();

app.MapGet("/hello", () =>
{
    return "Hello, world!";
});

app.MapBookEndpoints();

app.Run();
