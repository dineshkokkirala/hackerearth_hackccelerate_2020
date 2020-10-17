import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import AuthState from "./context/auth/AuthState";
import setAuthToken from './utils/setAuthToken';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
<AlertState>

    <BrowserRouter>
    <Fragment>

       <Navbar />
       <div className="container">

       </div>
       <Switch>
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
       </Switch>
    </Fragment>
      
    </BrowserRouter>
    </AlertState>
    </AuthState>
  );
}

export default App;
