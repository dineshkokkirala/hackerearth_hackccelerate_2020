import React,{useState,useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../context/auth/authContext";

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const {login,error,clearErrors,isAuthenticated} = authContext;

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push("/");
        }
        if(error === "Invalid Credentials"){
            alert("Invalid Credentials");
            clearErrors();
        }
         //eslint-disable-next-line
    },[error,isAuthenticated,props.history])

    const [user,setUser] = useState({
        email:"",
        password:"",
    })


    const {email,password} = user;

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(email===""||password===""){
            // alertContext.setAlert("Please fill all fields", "danger");
            alert("Please add all fields")
        }
        else{
            login({
                email,
                password
            })
            
        }
    }
    return (
        <form className="container mt-3 card  p-4" style={{width:"400px"}}>
             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" onChange={onChange} value={email} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={password} required minLength="6" />
            </div>
            <button className="btn btn-block btn-success mb-4" onClick={onSubmit}>Login</button>
            <Link to="/register" style={{textDecoration:"none"}}><button className="btn btn-block btn-light">New User? Register here</button></Link>
        </form>
    )
}

export default Login;