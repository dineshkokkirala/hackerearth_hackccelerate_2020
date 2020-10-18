import React, { useContext, useEffect } from 'react'
import AuthContext from "../context/auth/authContext";
import "../App.css"
import { Link } from 'react-router-dom';
const Home = () => {
    const authContext = useContext(AuthContext);
    useEffect(()=>{
        authContext.loadUser();
    // eslint-disable-next-line
    },[])
    return (
        <div className="container">
            <div className="row ff">
                <div className="col-12 col-md-12 col-lg-4">
                    <h1 className="text-center">Health</h1>
                    <Link to="health">
                    <div className="card m-3 health1 "  style={{backgroundColor:"black",width:"auto",height:"300px"}}>
                        
                    </div>
                    </Link>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <h1 className="text-center">Fitness</h1>
                    <Link to="/fitness">
                    <div className="card m-3 pic" style={{backgroundColor:"black",width:"auto",height:"300px"}}>
                        
                    </div>
                    </Link>
                </div>
                <div className="col-12 col-md-12 col-lg-4">
                    <h1 className="text-center">Calories Tracker</h1>
                    <Link to="/calories">
                    <div className="card m-3 calories" style={{backgroundColor:"black",width:"auto",height:"300px"}}>
                        
                    </div>
                    </Link>
                </div>
            </div>
            <div className="row">
                <Link to="add_task" className="btn btn-block btn-success" style={{textDecoration:"none"}}>
                <button className="btn btn-block btn-success"  >Start your Task</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
