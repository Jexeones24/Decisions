import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import DecisionShow from './components/Decisions/DecisionShow'
import authorize from './authorize'
import UserAdapter from './UserAdapter'
import SessionsAdapter from './SessionsAdapter'
import DecisionAdapter from './adapters/DecisionAdapter'
import OutcomeAdapter from './adapters/OutcomeAdapter'


class App extends Component {
  constructor(){
    super();

    // when i modify an element (decision, outcome, opinion) do i have to re-configure the entire object??? YES fuck
    this.state = {
      currentUser: {id: 1, username: "jexeones"}, // hardcoded
      loggedIn: false,
      decisions: [],
      outcomes: [],
      decisionObject: {}
    }
  }

  // getuser might go in here too
  componentDidMount(){
    console.log(this.state.currentUser)
    DecisionAdapter.getDecisions(this.state.currentUser)
      .then( decisions => {
        this.setState({decisions}, () => {console.log("mounting app", this.state.decisions)})
      })
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

  editDecision = (content, id) => {
    DecisionAdapter.editDecision(content, id)
      .then( newDecision => {
        let index =  this.state.decisions.findIndex((d) => d.id === id )
        return index
        this.setState({
          decisions: [
           ...this.state.decisions.slice(0,index),
           Object.assign({}, this.state.decisions[index], newDecision),
           ...this.state.decisions.slice(index+1)
         ],
         decisionObject: newDecision
       }, () => {console.log(newDecision)});
    })
  }

  deleteDecision = (id) => {
    DecisionAdapter.deleteDecision(id)
      .then( newDecisions => {
        this.setState({ decisions: newDecisions })
      }
    )
  }

  createOutcome = (content, decisionId) => {
    debugger
    OutcomeAdapter.createOutcome(content, decisionId)
      .then( outcome => this.setState({ outcomes: [...this.state.outcomes, outcome]})
    )
  }

  logout = () => {
    this.setState({loggedIn: false, currentUser: {}})
    localStorage.token = ""
    this.props.history.push("login")
  }

  renderContainer = () => {
    return(
      <div>
        <Container currentUser={this.state.currentUser} decisions={this.state.decisions}/>
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

  renderShow = (decision) => {
    return (
      <DecisionShow history={decision.history} decisionId={decision.match.params.id}
      editDecision={this.editDecision}
      deleteDecision={this.deleteDecision}
      createOutcome={this.createOutcome}/>
    )
  }


  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>THESTRUGGLEISREAL</h1>
          </header>
            <Route exact path='/' render={this.renderContainer} />
            <Route exact path='/decisions/:id' render={this.renderShow} />
            <Route exact path="/login" render={this.renderLogin} />
            <Route exact path="/signup" render={this.renderSignup} />
          {/* <footer>
            <h3>LIFESTRIFE Copyright &copy; thestruggleisreal</h3>
          </footer> */}
        </div>
      </Router>
    );
  }
}



export default App;
