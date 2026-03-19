namespace Api.Books
{
    public class BookRepository : IBookRepository
    {
        private List<Book> _books =
        [
            new Book { Id = 1, Title = "Clean Code", Author = "Robert C. Martin", Year = 2008, Price = 35.99m },
            new Book { Id = 2, Title = "The Pragmatic Programmer", Author = "Andrew Hunt", Year = 1999, Price = 39.99m },
            new Book { Id = 3, Title = "Design Patterns", Author = "Erich Gamma", Year = 1994, Price = 49.99m },
            new Book { Id = 4, Title = "Refactoring", Author = "Martin Fowler", Year = 1999, Price = 42.50m },
            new Book { Id = 5, Title = "Domain-Driven Design", Author = "Eric Evans", Year = 2003, Price = 54.00m },

            new Book { Id = 6, Title = "You Don’t Know JS", Author = "Kyle Simpson", Year = 2015, Price = 29.99m },
            new Book { Id = 7, Title = "JavaScript: The Good Parts", Author = "Douglas Crockford", Year = 2008, Price = 25.00m },
            new Book { Id = 8, Title = "Eloquent JavaScript", Author = "Marijn Haverbeke", Year = 2018, Price = 31.50m },
            new Book { Id = 9, Title = "Head First Design Patterns", Author = "Eric Freeman", Year = 2004, Price = 44.99m },
            new Book { Id = 10, Title = "Working Effectively with Legacy Code", Author = "Michael Feathers", Year = 2004, Price = 47.00m },

            new Book { Id = 11, Title = "Cracking the Coding Interview", Author = "Gayle Laakmann McDowell", Year = 2015, Price = 39.50m },
            new Book { Id = 12, Title = "Introduction to Algorithms", Author = "Thomas H. Cormen", Year = 2009, Price = 89.99m },
            new Book { Id = 13, Title = "Soft Skills", Author = "John Sonmez", Year = 2014, Price = 27.99m },
            new Book { Id = 14, Title = "The Clean Coder", Author = "Robert C. Martin", Year = 2011, Price = 33.00m },
            new Book { Id = 15, Title = "Code Complete", Author = "Steve McConnell", Year = 2004, Price = 58.75m }
        ];

        public IEnumerable<Book> GetAll() => _books;

        public Book? GetById(int id) => _books.FirstOrDefault(b => b.Id == id);

        public Book Create(Book book)
        {
            var id = _books.Max(b => b.Id) + 1;
            book.Id = id;
            _books.Add(book);

            return book;
        }

        public bool Update(int id, Book book)
        {
            var existingBook = GetById(id);
            if (existingBook is null)
            {
                return false;
            }

            existingBook.Title = book.Title;
            existingBook.Author = book.Author;
            existingBook.Year = book.Year;
            existingBook.Price = book.Price;

            return true;
        }

        public bool Delete(int id)
        {
            var existingBook = GetById(id);
            if (existingBook is null)
            {
                return false;
            }

            _books.Remove(existingBook);

            return true;
        }
    }
}
