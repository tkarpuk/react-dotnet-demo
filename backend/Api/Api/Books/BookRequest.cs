namespace Api.Books
{
    public class BookRequest
    {
        public string? Author { get; set; }
        public int PageSize { get; set; }
        public int Page { get; set; }
    }
}
