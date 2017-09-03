import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu, Item, Segment, Input } from 'semantic-ui-react'
import './App.css';
import Login from './components/Login'
import DecisionContainer from './components/DecisionContainer'

class App extends Component {
  constructor(){
    super();
  }

  render() {
    let activeItem = null;

    return (
      <div className="App">
        <div>
          <Menu pointing>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <div className="segment">
            <DecisionContainer />
            {/* <Login /> */}
          </div>
        </div>

      </div>
    );
  }
}

export default App;

//conditional here telling what to render - login/signup
