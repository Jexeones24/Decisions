import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import NavBar from './components/NavBar'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: {},
      loggedIn: false
    }
  }

  renderHome = () => {
    return(
      <div>
        HOME
      </div>
    )
  }


  render() {
    return (
      <div className="container-app">
        <div className="sidebar"></div>
          <header>
            <h1>LIFE STRIFE</h1>
            <aside>
              <Router>
                <div>
                  <NavBar loggedIn={this.props.loggedIn} logout={this.logout} />
                  <Route exact path="/" render={this.renderHome} />
                  <Route exact path="/login" render={this.renderLogin} />
                </div>
              </Router>
            </aside>
          </header>

          <nav>
            <ul>
              <h2><li><a href="#">LIFELINE</a></li></h2>
              <h2><li><a href="#">QUESTIONS</a></li></h2>
              <h2><li><a href="#">FML</a></li></h2>
            </ul>
          </nav>
          <article>
            <Container />
          </article>
        <footer><h3>FEETER Copyright &copy; yofuckdis</h3></footer>
      </div>
    );
  }
}

export default App;
