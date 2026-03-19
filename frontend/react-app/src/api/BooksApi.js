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