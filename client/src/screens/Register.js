import React,{useContext,useState,useEffect} from 'react'
import AuthContext from "../context/auth/authContext";
import M from "materialize-css"

const Register = (props) => {
    const authContext = useContext(AuthContext);

    const {register,error,isAuthenticated,clearErrors} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push("/");
        }
    
        if (error === "Email is already exists") {
          M.toast({html:"User already exists",classes:"red rounded"})
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
            M.toast({html: 'All fields are required', classes: 'red rounded'});
        }else if(password!==password2){
            M.toast({html: 'Passwords must be same', classes: 'red rounded'})
        }else{
            register({
                username,
                email,
                password
            })
            
        }
    }

    return (
        <form className="container mt-3 card p-4" style={{width:"500px"}}>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" className="form-control" name="username" id="username" onChange={onChange} value={username} />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" onChange={onChange} value={email} />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={password} />
            </div>
            <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input type="password" className="form-control" name="password2" id="password2" onChange={onChange} value={password2} />
            </div>
            <button className="btn btn-block btn-success" onClick={onSubmit} >Register</button>
        </form>
    )
}

export default Register
