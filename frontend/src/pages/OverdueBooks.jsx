import { useState , useEffect } from "react";
import api from "../services/api";

function OverdueBooks() {
  const [overdueBooks , setOverdueBooks] =  useState([]);

  useEffect(() => {
    fetchOverdueBooks()
  }, []);

  const fetchOverdueBooks = async() => {
    try{
      const res = await api.get("/issues/overdue");

      setOverdueBooks(res.data.data);

    }catch(error){
      console.log(error)
    }
  }

  return(
    <div>
      <h1> Overdue Books </h1>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Id</th>
            <th>Book</th>
            <th>Copy Code</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {overdueBooks.length > 0 ? (
            overdueBooks.map((issue)=>(
              <tr key={issue._id}>
                <td>{issue.studentName}</td>
                <td>{issue.studentId}</td>
                <td>{issue.book?.title || "N/A"}</td>
                <td>{issue.copy?.copyCode || "N/A"}</td>
                <td>{new Date(issue.dueDate).toLocaleDateString()}</td>
                <td>{issue.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                No Overdue Books
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default OverdueBooks;