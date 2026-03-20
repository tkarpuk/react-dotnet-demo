import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBook, getBooks } from "../api/BooksApi";

export default function BooksList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState('');
    const [page, setPage] = useState(1);
    const [pageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPage, setTotalPage] = useState(0);


    function loadBooks(params) {
        getBooks(params)
        .then(res => {
            setBooks(res.items);
            setTotalCount(res.totalCount);
            setTotalPage(res.totalPage);
        })
        .catch(err => console.error(err));
    }

    useEffect(()=> {
        const params = new URLSearchParams({
            author, page, pageSize 
        });
        loadBooks(params);
    }, [author, page, pageSize]);

    function handleDelete(id, title) {
        if (!confirm(`#${id}  '${title}'. Are you sure you want to delete this book?`)) return;

        deleteBook(id)
        .then(() => loadBooks())
        .catch(err => console.error(err));
    }

    return (
        <div> 
            <h2 className="mb-4">Books List</h2>
            <p><button onClick={() => navigate("books/new")} className="btn btn btn-success">Add Book</button></p>
            <div>
                <div className="col-md-4">
                    <label className="form-label">Author:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by author"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                            setPage(1);
                        }}
                    />
                </div>
            </div>
            <br />
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
                            <button onClick={() => handleDelete(b.id, b.title)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                    Total: {totalCount} | Page {page} of {totalPage}
                </div>
                <div>
                    <button
                        className="btn btn-outline-primary me-2"
                        disabled={page <= 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Previous
                    </button>

                    <button
                        className="btn btn-outline-primary"
                        disabled={page >= totalPage}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}