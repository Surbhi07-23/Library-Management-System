import { useState , useEffect } from "react";
import api from "../services/api";

function ActiveIssues() {
  const [issues , setIssues] =  useState([]);

  useEffect(() => {
    fetchActiveIssues()
  }, []);

  const fetchActiveIssues = async() => {
    try{
      const res = await api.get("/issues/active");

      setIssues(res.data.data);

    }catch(error){
      console.log(error)
    }
  }

  const returnBook = async(issueId) => {
    try{
      await api.put(`/issues/return/${issueId}`);
      alert("Book returned successfuly");
      fetchActiveIssues(); // to show updated active issues once a book has been returned

    }catch(error){
      console.log(error)
      alert("Failed to return book")
    }
  }

  return(
    <div className="container mt-4">
      <h1 className="mb-4"> Active Issues </h1>

        <div className="table-responsive">
            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Id</th>
                <th>Book</th>
                <th>Copy Id</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {issues.length > 0 ? (
                issues.map((issue)=>(
                  <tr key={issue._id}>
                    <td>{issue.studentName}</td>
                    <td>{issue.studentId}</td>
                    <td>{issue.book?.title || "N/A"}</td>
                    <td>{issue.copy?.copyCode || "N/A"}</td>
                    <td>{new Date(issue.dueDate).toLocaleDateString("en-GB")}</td>
                    <td>{issue.status}</td>
                    <td>
                      <button onClick={() => returnBook(issue._id)}>
                        RETURN BOOK
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    No Active Issues
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
 
    </div>
  )
}
export default ActiveIssues;