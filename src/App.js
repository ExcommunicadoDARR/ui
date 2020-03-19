import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import testpy from './js/connector'

class  App extends Component  {
  
  connect()
  {
    
   console.log("raghu");
    
    console.log(testpy());
  }
   
  
  render(){
  return (
    <div className="App">
      <Greet/>
      <button onClick={this.connect}>Python</button>
    </div>
  );
}
}

export default App;
