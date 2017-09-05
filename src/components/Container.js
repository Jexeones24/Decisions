import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Decision from './Decision'
import Outcome from './Outcome'
import DecisionAdapter from '../adapters/DecisionAdapter'
import OutcomeAdapter from '../adapters/OutcomeAdapter'
import OpinionAdapter from '../adapters/OpinionAdapter'
import DecisionIndex from './DecisionIndex'
import DecisionShow from './DecisionShow'
import DecisionContent from './DecisionContent'
import { Button } from 'semantic-ui-react'



export default class Container extends Component {
  constructor(){
    super();

    this.state = {
      decisions: [],
      decisionObject: {},
      outcomes: [],
      opinions: [],
      decisionFormVisible: false,
      showDecision: false,
      filtered: null,
      currentUser: {id: 2, username: "smorelli"} // hardcoded
    }
  }

  componentDidMount(){
    console.log(this.state.currentUser)
    DecisionAdapter.getDecisions(this.state.currentUser)
      .then( decisions => {
        this.setState({decisions}, () => {console.log(this.state.decisions)})
      })
    }

  createDecision = (decision) => {
    DecisionAdapter.createDecision(decision)
      .then( decision => this.setState({
        decisions: [...this.state.decisions, decision]}
      )
    )
  }


  deleteDecision = (decision) => {
    DecisionAdapter.deleteDecision(decision)
      .then( newDecisions => this.setState({ decisions: newDecisions }, () => { window.location = '/'})
    )
  }

  // this isn't updating
  // decision show needs to be passed new state of updated decisionObject - how do i do that?
  editDecision = (content, decision) => {
    debugger
    DecisionAdapter.editDecision(content, decision)
      .then( newDecision => {
        let index = this.state.decisions.findIndex( d => d.id === decision.id )
        this.setState({
          decisions: [
           ...this.state.decisions.slice(0,index),
           Object.assign({}, this.state.decisions[index], newDecision),
           ...this.state.decisions.slice(index+1)
         ]
       }, () => {console.log(newDecision)});
    })
  }

  createOutcome = (content, decisionId) => {
    OutcomeAdapter.createOutcome(content, decisionId)
      .then( outcome => this.setState({ outcomes: [...this.state.outcomes, outcome]})
    )
  }

  deleteOutcome = (outcome) => {
    OutcomeAdapter.deleteOutcome(outcome.id)
      .then( newOutcomes => this.setState({ outcomes: newOutcomes })
    )
  }

  editOutcome = (content, id) => {
    OutcomeAdapter.editOutcome(content, id)
      .then( newOutcome => {
        let index = this.state.outcomes.findIndex( outcome => outcome.id === id )
        this.setState({
          outcomes: [
           ...this.state.outcomes.slice(0,index),
           Object.assign({}, this.state.outcomes[index], newOutcome),
           ...this.state.outcomes.slice(index+1)
         ]
       }, () => {console.log(this.state.outcomes)});
    })
  }


  createOpinion = (content, outcomeId, value) => {
    OpinionAdapter.createOpinion(content, outcomeId, value)
      .then( opinion => this.setState({ opinions: [...this.state.opinions, opinion]}, () => {console.log(this.state.opinions)})
    )
  }

  deleteOpinion = (opinion) => {
    console.log("delete opinion", opinion.opinion.id)
    OpinionAdapter.deleteOpinion(opinion.opinion.id)
      .then( newOpinions => this.setState({ opinions: newOpinions })
    )
  }

  editOpinion = (content, id) => {
    OpinionAdapter.editOpinion(content, id)
      .then( newOpinion => {
        let index = this.state.opinions.findIndex( opinion => opinion.id === id )
        this.setState({
          opinions: [
           ...this.state.opinions.slice(0,index),
           Object.assign({}, this.state.opinions[index], newOpinion),
           ...this.state.opinions.slice(index + 1)
         ]
       }, () => {console.log(this.state.opinions)});
    })
  }

  showDecisionForm = () => {
    this.setState({ decisionFormVisible: !this.state.decisionFormVisible })
  }

  showDecision = (e) => {
    let decision = this.state.decisions.filter((d) => d.id === e.id)
    DecisionAdapter.showDecision(decision)
      .then( decision => this.setState({
        showDecision: !this.state.showDecision,
        decisionObject: decision
      }, () => {console.log(this.state.decisionObject)})
    )
  }

  backToIndex = () => {
    console.log("back in index")
  }

  // need something to setState of showDecision on click in decisionShow
  render(){

    let decisionsToDisplay = () => {
      return this.state.showDecision ? [] : this.state.decisions
    }

    return (
      <div className="container">
        <nav>
          <ul>
            <button onClick={this.showDecisionForm}>NEW DECISION</button>
          </ul>
        </nav>
        <article>
          {this.state.showDecision && <DecisionShow decision={this.state.decisionObject} deleteDecision={this.deleteDecision} editDecision={this.editDecision}/>}

          {this.state.decisionFormVisible ? <div className="decisions"><Decision
          decision={this.state.decisionObject} createDecision={this.createDecision}
          deleteDecision={this.deleteDecision}
          editDecision={this.editDecision}
          decisions={this.state.decisions}
          createOutcome={this.createOutcome}
          deleteOutcome={this.deleteOutcome}
          editOutcome={this.editOutcome}
          outcomes={this.state.outcomes}
          createOpinion={this.createOpinion}
          deleteOpinion={this.deleteOpinion}
          editOpinion={this.editOpinion}
          opinions={this.state.opinions}/></div> :
          <div className="decisions"><DecisionIndex decisions={decisionsToDisplay()}
          backToIndex={this.backToIndex} showDecision={this.showDecision}/></div>}
        </article>
      </div>
    )
  }
}
