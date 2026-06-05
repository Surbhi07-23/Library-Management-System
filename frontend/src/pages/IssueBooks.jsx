import { useState } from "react";
import api from "../services/api.js";

function IssueBook(){
  const [formData , setformData] = useState({
    studentName : "",
    studentId : "",
    bookId : "",
    copyId : "",
    issueDate : "",
    dueDate : ""
  })

  const handleChange = (event) => {
  setformData({
    ...formData,
    [event.target.name] : event.target.value
  })
  }

  const handleSubmit =  async (e) => {
  e.preventDefault();

  try{
    await api.post("/issues" , formData);

    alert("Issued book successfully!");
    
    setformData({
      studentName : "",
      studentId : "",
      bookId : "",
      copyId : "",
      issueDate : "",
      dueDate : ""
    })
  }catch(error){
    console.log(error);
    alert("Failed to issue book!")
  }
  }
  return (
  <div className="container mt-4">
    <h2 className="mb-4">Issue Book</h2>

    <form  onSubmit={handleSubmit}>
      <div>
        <input
          className="form-control"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="form-control"
          name="studentId"
          placeholder="Student Id"
          value={formData.studentId}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="form-control"
          name="bookId"
          placeholder="Book ID"
          value={formData.bookId}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="form-control"
          name="copyId"
          placeholder="Copy ID"
          value={formData.copyId}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="form-control"
          type="date"
          name="issueDate"
          placeholder="Issue Date"
          value={formData.issueDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          className="form-control"
          type="date"
          name="dueDate"
          placeholder="Due Date"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="Submit" className="btn btn-primary">
        Issue book
      </button>
    </form>
  </div>
)

};


export default IssueBook;