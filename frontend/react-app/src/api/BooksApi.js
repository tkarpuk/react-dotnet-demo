const BASE_URL = 'http://localhost:5156';

export async function GetHello() {
    const response = await fetch(`${BASE_URL}/hello`);
    if (!response.ok) {
        throw new Error("api:GetHello() - request failed");
    }

    return await response.text();
}

export async function GetBooks() {
    const response = await fetch(`${BASE_URL}/api/books`);
    if (!response.ok) {
        throw new Error("api:GetBooks() - request failed");
    }

    return await response.json();    
}