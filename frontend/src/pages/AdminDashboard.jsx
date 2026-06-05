import { useEffect ,useState } from "react";
import api from "../services/api.js";

function Dashboard(){
    const [stats , setStats] = useState({});

    useEffect(() => {
        fetchStats();
    } , []);

    const fetchStats = async () => {
        const res = await api.get("/dashboard");
        setStats(res.data.data);
        //res.data : actual body payload backend server sent
        //2nd (.data) is for the actual details related to book
        //res = {status: 200,headers: { ... }, data: {success: true, data: {totalBooks: 10, availableBooks: 8, activeIssues: 2,overdueBooks: 0}}
    };


    return (
        <div className="container mt-4">
            <h1 className="mb-4">
                Library Dashboard
            </h1>

            <div className="card">
                <div className="card-body">
                    <h5>Total Books</h5>
                    <h2>{stats.totalBooks}</h2>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5>Available Copies</h5>
                    <h2>{stats.availableBooks}</h2>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5>Active Issues</h5>
                    <h2>{stats.activeIssues}</h2>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5>Overdue Books</h5>
                    <h2>{stats.overdueBooks}</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;