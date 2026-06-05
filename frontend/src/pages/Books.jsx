import { useState , useEffect } from "react";
import api from "../services/api.js";

function Books() {
    const [books , setBooks ] = useState([]);

    const[formData , setformData] = useState({
        title : "",
        author : "",
        isbn : ""
    });

    useEffect(() => {
        fetchBooks();
    } , []);

    const fetchBooks = async () => {
        try{
            const res = await api.get("/books");
            setBooks(res.data.data);
        }catch(error){
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await api.post("/books" , formData);  //post req to /api/books endpoint and pases formData {title ,author , isbn }

            setformData({
                title : "",
                author : "",
                isbn : ""
            })

            fetchBooks(); //book list with changes

            alert("books added successfully")

        }catch(error){
            console.log(error);
            alert("fail to add books")
        }
    }

    const handleChange = (e) => {
        setformData({
            ...formData, //copies all the existing key-value pairs currently stored in our state object
            [e.target.name] : e.target.value ////It then appends or overrides just the key we are changing (eg title) with  every keystroke value
                //so if we are changinge only the title ; authir and isbn do not get erased from memory
        })
    }


    return (
        <div
            style={{
            maxWidth: "1000px",
            margin: "auto",
            padding: "20px"
            }}
        >
            <h1>Add a book</h1>
            <form onSubmit={handleSubmit}
                style={{
                display: "flex",
                gap: "10px",
                marginBottom: "30px",
                flexWrap: "wrap"
        }}
            >
                <input 
                    name="title"
                    type="text"
                    placeholder="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <input
                    name="author"
                    type="text"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />

                <input
                    name="isbn"
                    type="text"
                    placeholder="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add book</button>

            </form>

            <h2>Books List</h2>
            <table
                border="1"
                cellPadding="10"
                style={{
                width: "100%",
                borderCollapse: "collapse"
        }}
            >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Book ID</th>
                        <th>Total Copies</th>
                        <th>Available copies</th>
                    </tr>
                </thead>

                <tbody>
                    {books.length > 0 ? (
                        books.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{book._id}</td>
                                <td>{book.totalCopies}</td>
                                <td>{book.availableCopies}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">   {/* creates a single, seamless row that spans the full width of the table.  */}
                                No books found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
    
}

export default Books;

