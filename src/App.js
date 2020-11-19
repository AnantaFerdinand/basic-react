//Pertemuan 25 Web Porgramming:
import React from "react";
import './App.css';
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Home, Login, Register} from "./Pages";
const App = () =>{
 return(
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;