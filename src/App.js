import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu, Item, Segment, Input } from 'semantic-ui-react'
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar'
import DecisionContainer from './components/DecisionContainer'
import UserAdapter from './adapters/UserAdapter'

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: {},
      loggedIn: false
    }
  }

  // no jwt token yet
  createUser = (user) => {
    UserAdapter.createUser(user)
      .then( data => {
        this.setState({ currentUser: data, loggedIn: true })
      }, () => {console.log(this.state)})
  }

  renderHome = () => {
    return (
      <DecisionContainer />
    )
  }

  renderLogin = () => {
    return (
      <Login createUser={this.createUser}/>
    )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="segment">
              <NavBar />
              <Route exact path="/" render={this.renderHome} />
              <Route exact path="/login" render={this.renderLogin} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
