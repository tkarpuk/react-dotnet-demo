import { useEffect, useState } from "react";
import { getBooks } from "../api/BooksApi";

export default function BooksList() {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        getBooks()
        .then(res => setBooks(res))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Books List</h2>
            <p><button>Add Book</button></p>
            <table border="" width="80%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
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
                        <td>
                            <button>Edit</button>{' '}
                            <button>Delete</button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}