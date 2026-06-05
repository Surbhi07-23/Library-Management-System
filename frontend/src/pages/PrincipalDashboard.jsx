import { useState , useEffect } from "react";
import api from "../services/api";

function PrincipalDashboard(){
    const [stats , setStats] = useState([]);

    useEffect(() => {
        fetchStats()
    } , []);

    const fetchStats = async ()=> {
        try{
            const res = await api.get("/dashboard");
            setStats(res.data.data)
        }catch(error){
            console.log(error)
            alert("failed  to fetch data")
        }
    }

    return(
        <div className="container mt-4">
            <h1 className="mb-4">Principal Dashboard</h1>
        
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h5>Total Books</h5>
                            <h2>{stats.totalBooks}</h2>
                        </div>
                    </div>
                </div>
            
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h5>Available Books</h5>
                            <h2>{stats.availableBooks}</h2>
                        </div>
                    </div>
                </div>
            

            
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <h5>Active Issues</h5>
                            <h2>{stats.activeIssues}</h2>
                        </div>
                    </div>
                </div>
            

            
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                        <h5>Overdue Books</h5>
                        <h2>{stats.overdueBooks}</h2>   
                        </div>
                    </div>
                </div>
            
        </div>
    )
};

export default  PrincipalDashboard;