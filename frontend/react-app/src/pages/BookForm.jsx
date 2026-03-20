import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBookById, createBook, updateBook } from "../api/BooksApi";

export default function BookForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        author: "",
        year: 1900,
        price: 0
    });

    function loadBook(id) {
        if (!id) return;
        
        getBookById(id)
        .then(res => setForm(res))
        .catch(err => console.error(err));
    }
        
    useEffect(()=> {
        loadBook(id);
    }, [id]);

    function goBack() {
        navigate("/");
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        id ? update(id, form) : create(form);
    }

    function create(book) {

        console.log(book);

        createBook(book)
            .then(() => goBack())
            .catch(err => console.error(err));
    }

    function update(id, book) {
        updateBook(id, book)
            .then(() => goBack())
            .catch(err => console.error(err));
    }

    return (

        <div className="col-md-6">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2>BookForm ({id})</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label> <br />
                            <input type="text" name="title" onChange={handleChange} value={form.title} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author</label> <br />
                            <input type="text" name="author" onChange={handleChange} value={form.author} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year</label> <br />
                            <input type="number" name="year" onChange={handleChange} value={form.year} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label> <br />
                            <input type="number" name="price" onChange={handleChange} value={form.price} className="form-control"/>
                        </div>
                        <div className="d-flex gap-2">
                            <button type="sumbit" className="btn btn-primary">Save</button> {'    '}
                            <button type="button" onClick={() => goBack()} className="btn btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}