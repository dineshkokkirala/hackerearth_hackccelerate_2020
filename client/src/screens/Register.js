import React,{useContext,useState,useEffect} from 'react'
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext"
import { Link } from 'react-router-dom';
const Register = (props) => {
    const authContext = useContext(AuthContext);
    // const alertContext = useContext(AlertContext);
    // const {setAlert}=alertContext;
    const {register,error,isAuthenticated,clearErrors} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push("/");
        }
    
        if (error === "Email is already exists") {
        //   alertContext.setAlert("User already exists","danger")
        alert("User already exists")
          clearErrors();
        }
        //eslint-disable-next-line
      }, [error, isAuthenticated, props.history]);
    

    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        password2:""
    })

    const {username,email,password,password2} = user;

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(username===""||email===""||password===""){
            // alertContext.setAlert("Please fill all fields", "danger");
            alert("Please add all fields")
        }else if(password.length<=5){
            alert("Password must be atleast 6 characters")
        }
        else if(password!==password2){
            // alertContext.setAlert("Passwords must be same", "danger");
            alert("Passwords must be same")
        }else{
            register({
                username,
                email,
                password
            })
            
        }
    }

    return (
        <form className="container mt-3 card  p-4" style={{width:"400px"}}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" id="username" onChange={onChange} value={username} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" onChange={onChange} value={email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={password} required minLength="6" />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" name="password2" id="password2" onChange={onChange} value={password2} />
            </div>
            <button className="btn btn-block btn-success mb-4" onClick={onSubmit} >Register</button>
            <Link to="/login" style={{textDecoration:"none"}}><button className="btn btn-block btn-light">Already have an account ? Login here</button></Link>
        </form>
        
    )
}

export default Register
