import React, { Component } from 'react'
import Decision from './Decision'
import Outcome from './Outcome'
import Opinion from './Opinion'
import DecisionAdapter from '../adapters/DecisionAdapter'
import OutcomeAdapter from '../adapters/OutcomeAdapter'


export default class Container extends Component {
  constructor(){
    super();

    this.state = {
      decisions: [],
      outcomes: [],
      opinions: []
    }
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
      .then( newDecisions => this.setState({ decisions: newDecisions }, () => {console.log(this.state.decisions)})
    )
  }

  editDecision = (content, id) => {
    DecisionAdapter.editDecision(content, id)
      .then( newDecision => {
        let index = this.state.decisions.findIndex( decision => decision.id === id )
        this.setState({
          decisions: [
           ...this.state.decisions.slice(0,index),
           Object.assign({}, this.state.decisions[index], newDecision),
           ...this.state.decisions.slice(index+1)
         ]
       }, () => {console.log(this.state.decisions)});
    })
  }

  createOutcome = (content, decisionId) => {
    console.log("create outcome", content, decisionId)
    OutcomeAdapter.createOutcome(content, decisionId)
      .then( outcome => this.setState({ outcomes: [...this.state.outcomes, outcome]}, () => {console.log(this.state.outcomes)})
    )
  }

  deleteOutcome = (outcome) => {
    OutcomeAdapter.deleteOutcome(outcome.id)
      .then( newOutcomes => this.setState({ outcomes: newOutcomes }, () => {console.log(this.state.outcomes)})
    )
  }

  editOutcome = (content, id) => {
    console.log("edit outcome")
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

  render(){
    return (
      <div className="container">
        <div className="decision-section">
          <Decision createDecision={this.createDecision}
          deleteDecision={this.deleteDecision}
          editDecision={this.editDecision}
          decisions={this.state.decisions}
          createOutcome={this.createOutcome}
          deleteOutcome={this.deleteOutcome}
          editOutcome={this.editOutcome}
          outcomes={this.state.outcomes}/>
        </div>
        <div className="opinion-section">
          <Opinion />
        </div>
      </div>
    )
  }
}
