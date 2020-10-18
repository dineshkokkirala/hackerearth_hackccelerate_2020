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
import Health from './components/Health';
import Fitness from './components/Fitness';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import FoodCalories from './components/FoodCalories';
import All_Calories from './components/All_Calories';
import Profile from './components/Profile';

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

       <Switch>
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/health" component={Health} />
          <PrivateRoute exact path="/fitness" component={Fitness} />
          <PrivateRoute exact path="/tasks" component={Tasks} />
          <PrivateRoute exact path="/add_task" component={AddTask} />
          <PrivateRoute exact path="/calories" component={FoodCalories} />
          <PrivateRoute exact path="/calories/all" component={All_Calories} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
       </Switch>
       </div>
    </Fragment>
      
    </BrowserRouter>
    </AlertState>
    </AuthState>
  );
}

export default App;
