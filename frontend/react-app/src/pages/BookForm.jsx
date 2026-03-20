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
        <div>
            <h2>BookForm ({id})</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title</label> <br />
                    <input type="text" name="title" onChange={handleChange} value={form.title}/>
                </p>
                <p>
                    <label>Author</label> <br />
                    <input type="text" name="author" onChange={handleChange} value={form.author}/>
                </p>
                <p>
                    <label>Year</label> <br />
                    <input type="number" name="year" onChange={handleChange} value={form.year}/>
                </p>
                <p>
                    <label>Price</label> <br />
                    <input type="number" name="price" onChange={handleChange} value={form.price}/>
                </p>
                <p>
                    <button type="sumbit">Save</button> {'  '}
                    <button type="button" onClick={() => goBack()}>Cancel</button>
                </p>
            </form>
        </div>

    )
}