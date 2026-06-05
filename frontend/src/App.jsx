import {BrowserRouter , Route , Routes} from "react-router-dom";

import Dashboard from "./pages/AdminDashboard.jsx";
import ActiveIssues from "./pages/ActiveIssues.jsx";
import Books from "./pages/Books.jsx";
import IssuedBooks from "./pages/IssueBooks.jsx";
import OverdueBooks from "./pages/OverdueBooks.jsx";
import Copies from "./pages/Copies.jsx";
import PrincipalDashboard from "./pages/PrincipalDashboard.jsx";
import StudentPortal from "./pages/StudentPortal.jsx";

import Navbar from "./components/navbar.jsx";

function App(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/issues/active" element={<ActiveIssues/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/issues" element={<IssuedBooks/>}/>
          <Route path="/overdue" element={<OverdueBooks/>}/>
          <Route path="/copies" element={<Copies/>}/>
          <Route path="/principal" element={<PrincipalDashboard/>}/>
          <Route path="/student" element={<StudentPortal/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;