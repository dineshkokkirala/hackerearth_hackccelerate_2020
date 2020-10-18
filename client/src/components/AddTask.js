import React, { useState,useContext, useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import AuthContext from "../context/auth/authContext";
import setAuthToken from "../utils/setAuthToken";
const AddTask = (props) => {

    const authContext = useContext(AuthContext);
    useEffect(()=>{
        
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        authContext.loadUser();

    },[])

    const [task,setTask]=useState({
        taskname:"",
        category:"",
        duration:0,
        description:""
    })

    const {taskname,category,duration,description}=task;

    const onChange = (e) => {
        setTask({...task,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
         e.preventDefault();
        // console.log(authContext.user._id)
        const task={
            user:authContext.user._id,
            taskname,
            category,
            duration,
            description
        }
        //console.log(task);
        let config = {
            "Content-Type":"application/json"
        }
        try {
            const task_to_be_added = await axios.post("/api/task",task,config)
            //console.log(task_to_be_added);
            props.history.push("/tasks")
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <h1>Add your Task</h1>
            <form className="container mt-3 card  p-4" style={{width:"400px"}}>
            <div className="form-group">
                <label htmlFor="taskname">TaskName</label>
                <input type="text" className="form-control" name="taskname" id="taskname" onChange={onChange} value={taskname} required />
            </div>
            <div className="form-group">
            <label htmlFor="category">Select your Category</label>
                <select className="form-control" id="category" name="category" value={category} onChange={onChange} required>
                <option>Select your choice</option>
                <option value="health">Health</option>
                <option value="fitness">Fitness</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <input type="number" className="form-control" name="duration" id="duration" onChange={onChange} value={duration} required  />
                <small>Duration Should be in minutes</small>
            </div>
            <div className="form-group">
                <label htmlFor="description">About your task</label>
                <textarea className="form-control" id="description" rows="6" onChange={onChange} value={description} name="description" ></textarea>
            </div>
            <button className="btn btn-block btn-success mb-4" type="submit" onClick={onSubmit} >Add Task</button>
        </form>
        </div>
    )
}

export default AddTask
