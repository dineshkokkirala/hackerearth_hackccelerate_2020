import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,logout,user} = authContext;


    const onLogout=()=>{
        logout();
    }

    const authLinks=(
        <Fragment>
           
            <li className="nav-item active text-light mr-3">Hello {user&&user.username}</li>
            
            <Link style={{textDecoration:"none"}} to="/tasks">
                 <li className="nav-item active text-light mr-3" >Your Tasks</li>
            </Link>
            <li className="nav-item">
                <a onClick={onLogout} href="#!" style={{textDecoration:"none"}}>
                    <i className="fas fa-sign-out-alt" />
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks=(
        <Fragment>
            <li className="nav-item">
                    <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
        </Fragment>
    )

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><i className="fas fa-heartbeat"></i> Health & Fitness</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li> */}
                {isAuthenticated?authLinks:guestLinks}
                </ul> 
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
