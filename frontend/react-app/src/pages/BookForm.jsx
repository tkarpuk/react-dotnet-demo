import { useParams } from "react-router-dom"

export default function BookForm() {
    const { id } = useParams();

    return <h2>BookForm ({id})</h2>
}