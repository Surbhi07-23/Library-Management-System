import {BrowserRouter , Route , Routes} from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import ActiveIssues from "./pages/ActiveIssues.jsx";
import Books from "./pages/Books.jsx";
import IssuedBooks from "./pages/IssueBooks.jsx";
import OverdueBooks from "./pages/OverdueBooks.jsx";

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/active" element={<ActiveIssues/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/issue" element={<IssuedBooks/>}/>
          <Route path="/overdue" element={<OverdueBooks/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;