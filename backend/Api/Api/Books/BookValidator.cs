namespace Api.Books
{
    public static class BookValidator
    {
        public static Dictionary<string, string[]> Validate(Book book)
        {
            var errors = new Dictionary<string, string[]>();

            if (string.IsNullOrWhiteSpace(book.Title))
                errors["title"] = ["Title is required."];

            if (string.IsNullOrWhiteSpace(book.Author))
                errors["author"] = ["Author is required."];

            if (book.Year < 1000 || book.Year > DateTime.Now.Year)
                errors["year"] = ["Year is invalid."];

            if (book.Price <= 0)
                errors["price"] = ["Price should be greater than 0."];

            return errors;
        }
    }
}
