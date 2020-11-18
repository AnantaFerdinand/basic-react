//Pertemuan 24 Web Porgramming:
import './App.css';
import React, {Component, useEffect} from 'react';
import Cards from './components/Cards';
import axios from "axios";

class App extends Component{
state = {
  users: [],
};
  componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(response => response.json())
  // .then((json) => this.setState({users: json}));

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>this.setState({users: response.data}));
  
  }
  
render (){
  // console.log(this.state.users);
  return (
    <>
    {
      this.state.users.map((item)=>{
        return(
          <Cards 
          name={item.name}
          username={item.username}
          email={item.email}
          phone={item.phone}
          />
        );
      })}
      <p>Class App Component</p>
    </>
  )
 }
}


export default App;