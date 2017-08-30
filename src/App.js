import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DecisionContainer from './components/DecisionContainer'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <DecisionContainer/>
        {/* <Login />
        <Signup /> */}
      </div>
    );
  }
}

export default App;

//conditional here telling what to render 
