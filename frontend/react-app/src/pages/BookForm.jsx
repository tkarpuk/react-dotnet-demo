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
    const [errors, setErrors] = useState({});

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

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            console.log('Validation errors');
            return;
        }
        
        id ? update(id, form) : create(form);
    }

    function validate() {
        const newErrors = {};
        if (!form.title?.trim()) newErrors.title = "Title is required";
        if (!form.author?.trim()) newErrors.author = "Author is required";
        if (!form.year || (form.year < 1000 && form.year > 2026)) newErrors.year = "Year should be between 1000 and 2026";
        if (!form.price || form.price <= 0) newErrors.price = "Price must be more than 0";

        return newErrors;
    }

    function create(book) {
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
                    {id ? <h4>Edit book #{id}</h4> : <h4>Add a new book</h4>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title</label> <br />
                            <input type="text" name="title" onChange={handleChange} value={form.title} 
                                className={`form-control ${errors.title ? "is-invalid" : ""}`} />
                            <div className="invalid-feedback">{errors.title}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author</label> <br />
                            <input type="text" name="author" onChange={handleChange} value={form.author} 
                                className={`form-control ${errors.author ? "is-invalid" : ""}`}/>
                            <div className="invalid-feedback">{errors.author}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Year</label> <br />
                            <input type="number" name="year" onChange={handleChange} value={form.year} 
                                className={`form-control ${errors.year ? "is-invalid" : ""}`}/>
                            <div className="invalid-feedback">{errors.year}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label> <br />
                            <input type="number" name="price" onChange={handleChange} value={form.price} 
                                className={`form-control ${errors.price ? "is-invalid" : ""}`}/>
                            <div className="invalid-feedback">{errors.price}</div>
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