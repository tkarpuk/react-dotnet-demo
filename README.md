# ReactJS + ASP.NET Core Demo

Full-stack CRUD application built with **React (Vite)** and **ASP.NET Core (.NET 8)**.  
The project is fully containerized and can be launched locally using **Docker Compose**.

---

## 🚀 Features

- CRUD operations for books
- Validation (frontend + backend)
- Pagination and filtering
- REST API (ASP.NET Core Minimal API)
- React UI (Vite)
- Dockerized backend and frontend
- Nginx reverse proxy (frontend → backend)
- GitHub Actions CI (build + Docker validation)

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, JavaScript, Bootstrap  
- **Backend:** ASP.NET Core (.NET 8), Minimal API  
- **DevOps:** Docker, Docker Compose, GitHub Actions  
- **Web Server:** Nginx  

---

## 📦 Run Locally (Docker)

### 1. Clone repository
git clone https://github.com/<your-username>/react-dotnet-demo.git
cd react-dotnet-demo

2. Run application
docker compose up --build

4. Open in browser
Frontend: http://localhost:3000
Backend API: http://localhost:5000

---

## 📦 Run Locally (IDEs)

1. Open backend solution in VS, run it and copy work URL (like http://localhost:5xxx)

2. Open frontend solution in VS Code. Open file frontend\react-app\src\api\BooksApi.js and pase backend URL to the const BASE_URL. Save it.

3. Install dependencies:
npm install

4. Run dev server:
npm run dev

5.Open:
http://localhost:5173 (or link in your terminal)
