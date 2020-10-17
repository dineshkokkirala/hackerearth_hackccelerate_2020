import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import AuthState from "./context/auth/AuthState";
import setAuthToken from './utils/setAuthToken';
import AlertState from './context/alert/AlertState';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
<AlertState>

    <BrowserRouter>
       <Navbar />
       <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
       </Switch>
      
    </BrowserRouter>
    </AlertState>
    </AuthState>
  );
}

export default App;
