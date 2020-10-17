import React from 'react'

const Login = () => {
    return (
        <form className="container">
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" />
            </div>
            <button className="btn btn-block btn-success">Login</button>
        </form>
    )
}

export default Login;