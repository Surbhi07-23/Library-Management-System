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
        <div>
            <h1>
                Library Dashboard
            </h1>

            <h3>Total Books : {stats.totalBooks}</h3>
            <h3>Available Copies : {stats.availableBooks}</h3>
            <h3>Active Issues: {stats.activeIssues}</h3>
            <h3>Overdue Books : {stats.overdueBooks}</h3>
        </div>
    )
}

export default Dashboard;