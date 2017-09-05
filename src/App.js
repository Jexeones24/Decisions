import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import authorize from './authorize'
import UserAdapter from './UserAdapter'
import SessionsAdapter from './SessionsAdapter'


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: {},
      loggedIn: false
    }
  }

  createUser = (user) => {
    UserAdapter.createUser(user)
      .then( user => {
        this.setState({
        currentUser: user,
        loggedIn: true
      })
      localStorage.setItem('token', user.jwt)
      }
    )
  }


  getUser = (username, password) => {
    SessionsAdapter.getUser(username, password)
      .then( data => {
        localStorage.setItem('token', data.jwt)
        this.setState({ loggedIn: true, currentUser: data })
      })
    }

  logout = () => {
    this.setState({loggedIn: false, currentUser: {}})
    localStorage.token = ""
    this.props.history.push("login")
  }

  renderContainer = () => {
    return(
      <div>
        <Container />
      </div>
    )
  }

  renderLogin = () => {
    return (
      <div>
        <Login getUser={this.getUser} loggedIn={this.state.loggedIn}/>
      </div>
    )
  }

  renderSignup = (params) => {
    return (
      <div>
        <Signup createUser={this.createUser} loggedIn={this.state.loggedIn} history={params.history}/>
      </div>
    )
  }



  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>LIFE STRIFE</h1>
          </header>
            <Route exact path='/' render={this.renderContainer} />
            <Route exact path="/login" render={this.renderLogin} />
            <Route exact path="/signup" render={this.renderSignup} />
          <footer>
            <h3>LIFESTRIFE Copyright &copy; thestruggleisreal</h3>
          </footer>
        </div>
      </Router>
    );
  }
}



export default App;
