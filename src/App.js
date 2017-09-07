import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import DecisionShow from './components/Decisions/DecisionShow'
import UserAdapter from './UserAdapter'
import DecisionAdapter from './adapters/DecisionAdapter'
import OutcomeAdapter from './adapters/OutcomeAdapter'


class App extends Component {
  constructor(){
    super();


    this.state = {
      currentUser: {id: 2, username: "smorelli"},
      loggedIn: true,
      decisionObject: {
        outcomes:[],
        opinions:[]
      },
      decisions: [],
      outcomes: [],
      opinions: []
    }
  }

  componentDidMount(){
    console.log(this.state.currentUser)
    DecisionAdapter.getDecisions(this.state.currentUser)
      .then( decisions => {
        console.log(decisions)
        this.setState({decisions}, () =>   OutcomeAdapter.getOutcomes(this.state.currentUser)
            .then( outcomes => {
              this.setState({outcomes}, () => {console.log("mounting app", this.state.outcomes)})
            })
          )
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
    OutcomeAdapter.createOutcome(content, decisionId)
      .then( outcome => this.setState({ outcomes: [...this.state.outcomes, outcome]})
    )
  }

  createOpinion = (content, outcomeId, value) => {
    console.log('creating opinion', content, outcomeId, value)
  }

  logout = () => {
    this.setState({loggedIn: false, currentUser: {}})
    localStorage.token = ""
    this.props.history.push("login")
  }

  renderHome = () => {
    return(
      <div>
        <Home currentUser={this.state.currentUser} decisions={this.state.decisions}/>
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
      createOutcome={this.createOutcome}
      createOpinion={this.createOpinion} decisions={this.state.decisions} outcomes={this.state.outcomes} opinions={this.state.opinions}/>
    )
  }


  render() {

    return (
      <Router>
        <div className="content">
          <header>
            <Link to="/"><h1>THESTRUGGLEISREAL</h1></Link>
          </header>
          <div className="main">
            <Route exact path='/' render={this.renderHome} />
            <Route exact path='/decisions/:id' render={this.renderShow} />
            <Route exact path="/login" render={this.renderLogin} />
            <Route exact path="/signup" render={this.renderSignup} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
