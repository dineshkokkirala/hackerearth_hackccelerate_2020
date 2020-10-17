import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Navbar />
      <h1>KAND</h1>
    </BrowserRouter>
  );
}

export default App;
