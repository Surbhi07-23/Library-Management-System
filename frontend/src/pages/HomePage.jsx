import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center mt-5">

      <h1 className="mb-4">
        Library Management System
      </h1>

      <p className="mb-5">
        Select your portal
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">

        <Link
          to="/dashboard"
          className="btn btn-primary btn-lg"
        >
          Admin Portal
        </Link>

        <Link
          to="/student"
          className="btn btn-success btn-lg"
        >
          Student Portal
        </Link>

        <Link
          to="/principal"
          className="btn btn-warning btn-lg"
        >
          Principal Portal
        </Link>

      </div>

    </div>
  );
}

export default Home;