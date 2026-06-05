import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Library Management
        </Link>

        <div className="navbar-nav">

            <Link className="nav-link" to="/">
                Dashboard
            </Link>

            <Link className="nav-link" to="/books">
                Books
            </Link>

            <Link className="nav-link" to="/copies">
                Copies
            </Link>

            <Link className="nav-link" to="/issues">
                Issue Book
            </Link>

            <Link className="nav-link" to="/issues/active">
                Active Issues
            </Link>

            <Link className="nav-link" to="/overdue">
                Overdue
            </Link>

            <Link className="nav-link" to="/principal">
                Principal
            </Link>

            <Link className="nav-link" to="/student">
                Student
            </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;