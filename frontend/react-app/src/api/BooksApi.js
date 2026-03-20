const BASE_URL = 'http://localhost:5156';

export async function getHello() {
    const response = await fetch(`${BASE_URL}/hello`);
    if (!response.ok) {
        throw new Error("api:GetHello() - request failed");
    }

    return await response.text();
}

export async function getBooks() {
    const response = await fetch(`${BASE_URL}/api/books`);
    if (!response.ok) {
        throw new Error("api:GetBooks() - request failed");
    }

    return await response.json();    
}

export async function getBookById(id) {
    const response = await fetch(`${BASE_URL}/api/books/${id}`);
    if (!response.ok) {
        throw new Error("api:GetBooks() - request failed");
    }

    return await response.json();    
}

export async function deleteBook(id) {
    const response = await fetch(`${BASE_URL}/api/books/${id}`, 
        { method: 'DELETE' });
    if (!response.ok) {
        throw new Error(`api:deleteBook() - request failed id = ${id}`);
    }  
}

export async function createBook(book) {
    const response = await fetch(`${BASE_URL}/api/books`, 
        { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        });
    if (!response.ok) {
        throw new Error("api:createBook() - request failed");
    }  
}

export async function updateBook(id, book) {
    const response = await fetch(`${BASE_URL}/api/books/${id}`, 
        { 
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        });
    if (!response.ok) {
        throw new Error(`api:updateBook() - request failed id = ${id}`);
    }  
}