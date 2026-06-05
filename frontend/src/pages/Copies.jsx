import { useState , useEffect } from "react";
import api from "../services/api.js";

function Copies(){
    const [copies , setCopies] = useState([]);

    const [formData , setFormData] = useState({
        bookId : "",
        copyCode :""
    })

    useEffect(() => {
        fetchCopies()
    } ,[])

    const fetchCopies = async () => {
        try{
            const res = await api.get("/copies")
            console.log(res.data)
            setCopies(res.data.data);

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await api.post("/copies" , formData);

            alert ("Copy added successfully!")
            setFormData({
                bookId : "",
                copyCode :""
            })
            fetchCopies();

        }catch(error){
            console.log(error);
            alert("failed to add copy!")
        }
    }

    return(
        <div>
            <h1> Copies Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type ="text"
                    name="bookId"
                    placeholder="Book ID"
                    value={formData.bookId}
                    onChange={handleChange}
                />

                <br/>

                <input
                    type ="text"
                    name="copyCode"
                    placeholder="Copy Code"
                    value={formData.copyCode}
                    onChange={handleChange}
                />

                <br/>

                <button type="submit">
                    Add Copy
                </button>
            </form>

            <hr/>

            <h2> Copies List</h2>
            <table>
                <thead>
                    <tr>
                        <td>Copy ID</td>
                        <td>Book Title</td>
                        <td>Copy Code</td>
                        <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                    {copies.length > 0 ? (
                        copies.map((copy) => (
                            <tr key={copy._id}>
                                <td>{copy._id}</td>
                                <td>{copy.book?.title || "N/A"}</td>
                                <td>{copy.copyCode}</td>
                                <td>{copy.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">
                                No COpies Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Copies;