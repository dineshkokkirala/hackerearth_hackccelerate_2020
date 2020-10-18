import React,{useState,useEffect,useContext} from 'react';
import axios from "axios";
import setAuthToken from '../utils/setAuthToken'
import AuthContext from "../context/auth/authContext";


const Tasks = () => {

    const [current_tasks,setCurrent_tasks] = useState([])
    const [completed_tasks,setCompleted_tasks] = useState([])
    const [loading,setLoading]=useState(false);
    const authContext = useContext(AuthContext);


    useEffect(()=>{

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        authContext.loadUser();
        const fetch_current = async() =>{
            setLoading(true);
            const cur = await axios.get("/api/task/current_tasks");
            const comp = await axios.get("/api/task/completed_tasks")
            setCurrent_tasks(cur.data)
            //console.log(cur.data)
            setCompleted_tasks(comp.data);
            setLoading(false)
        }

        fetch_current();
    },[current_tasks,loading,completed_tasks])

    const mark=async(id)=>{
        let task = current_tasks.filter(task=>task._id===id)
        task[0].markascomplete=true
        let config={
            "Content-Type":"application/json"
        }
        try {
            const update_task=await axios.post("/api/task",task[0],config);
            const del=await axios.delete(`/api/task/${id}`)
            // console.log(update_task);
            // console.log(del)
        } catch (err) {
            console.log(err.message)
        }
        setCompleted_tasks(task[0])
        //console.log(task)
    }

    const onDelete=async(id)=>{
        await axios.delete(`/api/task/${id}`);
    }

    


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1>Current Tasks</h1>
                
                        {current_tasks.length>0 ? (current_tasks.map((task)=>{
                            //console.log(task);
                            return(
                               
                                <div className="card p-3 m-4" key={task._id}>
                                    <h1>{task.taskname}</h1>
                                    <h3>Category : {task.category}</h3>
                                    {task.duedate&&<h3>Due Date : {task.duedate.slice(0,10)}</h3>}
                                    <h3>Duration : {task.duration} min</h3>
                                    <h3>
                                        {task.description && <h3>About Task : {task.description}</h3>}
                                    </h3>
                                    <div className="row">
                                        <div className="col-12 col-md-12 col-lg-6">
                                            <button type="submit" className="btn btn-block btn-primary mb-3" onClick={()=>mark(task._id)} >Mark as Complete</button>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-6">
                                            <button type="submit" onClick={()=>onDelete(task._id)} className="btn btn-block btn-danger" >Delete</button>
                                        </div>
                                    </div>
                                </div>
                             
                            )
                        })):(<h3>Loading...</h3>)}
               
                    
                </div>
                <div className="col-12 col-md-6">
                    <h1>Completed Tasks</h1>

                    {completed_tasks.length>0 ? (completed_tasks.map((task)=>{
                           
                            return(
                               
                                <div className="card p-3 m-4" key={task._id}>
                                    <h1>{task.taskname}</h1>
                                    <h3>Category : {task.category}</h3>
                                    {task.duedate&&<h3>Due Date : {task.duedate.slice(0,10)}</h3>}
                                    <h3>Duration : {task.duration} min.</h3>
                                    <h3>
                                        {task.description && <h3>About Task : {task.description}</h3>}
                                    </h3>
                                    <div className="row">
                                        
                                        <div className="col-12 col-md-6">
                                            <button type="submit" onClick={()=>onDelete(task._id)} className="btn btn-block btn-danger" >Delete</button>
                                        </div>
                                    </div>
                                </div>
                             
                            )
                        })):(<h3>Loading...</h3>)}
                </div>
            </div>
        </div>
    )
}

export default Tasks
