import {useState ,useEffect} from "react";
import api from "../services/api";

function StudentPortal() {
    const [studentId , setStudentId] = useState(""); //and not useState([]) since updating a single string 
    const [issues , setIssues] = useState([]);

    const searchBooks = async () =>{
        try{
            const res = await api.get(`/issues/student/${studentId}`);

            console.log(res.data)
            setIssues(res.data.data);

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="container mt-4">
            <h2>Student Dashboard</h2>

            <input
                type="text"
                name="studentId"
                placeholder="Student id"
                value={studentId}
                onChange={(e) => {
                    setStudentId(e.target.value)
                }}
            />

            <button type="button" onClick={searchBooks}>
                search books
            </button>

            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Copy Code</th>
                        <th>Due Date</th>
                    </tr>
                </thead>

                <tbody>
                    {issues.length > 0 ? (
                        issues.map((issue) => (
                            <tr key={issue._id}>
                                <td>{issue.book?.title || "N/A"}</td>
                                <td>{issue.copy?.copyCode || "N/A"}</td>
                                <td>{new Date(issue.dueDate).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">
                                No Books Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )

}

export default StudentPortal