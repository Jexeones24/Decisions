import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'


class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: {},
      loggedIn: false
    }
  }


  render() {
    return (
      <div className="App">
        <aside><h1>NAVBAR</h1></aside>
          <div className="sidebar"></div>
          <header><h1>HEADER</h1></header>
          <section>
            <Container />
          </section>
        <footer><h1>FOOTER</h1></footer>
      </div>
    );
  }
}

export default App;
