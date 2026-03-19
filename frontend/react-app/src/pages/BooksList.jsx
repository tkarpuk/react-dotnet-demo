export default function BooksList() {

    return (
        <div>
            <h2>Books List</h2>
            <p><button>Add Book</button></p>
            <table border="" width="80%">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>The book</td>
                    <td>The Author</td>
                    <td>2025</td>
                    <td>
                        <button>Edit</button>{' '}
                        <button>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}