
namespace Api.Books
{
    public interface IBookRepository
    {
        IEnumerable<Book> GetAll();
        Book? GetById(int id);
        Book Create(Book book);
        bool Update(int id, Book book);
        bool Delete(int id);
    }
}