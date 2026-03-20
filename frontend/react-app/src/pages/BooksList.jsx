import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../api/BooksApi";

export default function BooksList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    function loadBooks() {
        getBooks()
        .then(res => setBooks(res))
        .catch(err => console.error(err));
    }

    useEffect(()=> {
        loadBooks();
    }, []);

    function handleDelete(id) {
        if (!confirm("Are you sure you want to delete this book?")) return;

        deleteBook(id)
        .then(() => loadBooks())
        .catch(err => console.error(err));
    }

    return (
        <div> 
            <h2 className="mb-4">Books List</h2>
            <p><button onClick={() => navigate("books/new")} className="btn btn btn-success">Add Book</button></p>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {books.map((b) => (
                    <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.title}</td>
                        <td>{b.author}</td>
                        <td>{b.year}</td>
                        <td>{b.price}</td>
                        <td>
                            <button onClick={() => navigate(`books/edit/${b.id}`)} className="btn btn-sm btn-primary me-2">Edit</button>{'    '}
                            <button onClick={() => handleDelete(b.id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}