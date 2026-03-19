const BASE_URL = 'http://localhost:5156';

export async function GetHello() {
    const response = await fetch(`${BASE_URL}/hello`);
    if (!response.ok) {
        console.error("api:GetHello() - request failed");
        throw new Error("Request failed");
    }

    return await response.text();
} 