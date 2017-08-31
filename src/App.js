import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import DecisionContainer from './components/DecisionContainer'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <DecisionContainer />
      </div>
    );
  }
}

export default App;

//conditional here telling what to render - login/signup
