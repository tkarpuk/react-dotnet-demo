import { Route, Routes } from "react-router-dom"
import TestHello from "./components/TestHello"
import BooksList from "./pages/BooksList"
import BookForm from "./pages/BookForm"

function App() {
  return (
    <div className="container mt-5">
      <TestHello />

      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/books/new" element={<BookForm />} />
        <Route path="/books/edit/:id" element={<BookForm/>}/>
      </Routes>
    </div>
  )
}

export default App
