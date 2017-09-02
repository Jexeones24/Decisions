import React, { Component } from 'react'
import DecisionList from './DecisionList'
import DecisionAdapter from '../adapters/DecisionAdapter'
import OutcomeAdapter from '../adapters/OutcomeAdapter'
import OpinionAdapter from '../adapters/OpinionAdapter'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    this.state = {
      decision: [],
      outcomes: [],
      opinions: []
    }
  }

  // currentUser_id is harcoded
  createDecision = (content) => {
    DecisionAdapter.createDecision(content)
      .then( decision => this.setState({
        decision }, () => {console.log("id:", this.state.decision.id, "decision:", this.state.decision)}
      )
    )
  }


  createOutcome = (content, id) => {
    OutcomeAdapter.createOutcome(content, this.state.decision.id)
      .then( outcome => this.setState({
        outcomes: [...this.state.outcomes, outcome]
      }, () => { console.log("id:", outcome.id, "outcomes:", this.state.outcomes) })
    )
  }

  createOpinions = (text, value) => {
    let outcome = this.state.outcomes.slice(-1)[0]
    OpinionAdapter.createOpinion(text, outcome.id, value)
      .then( opinion => this.setState({
        opinions: [...this.state.opinions, opinion]
      }, () => { console.log("id:", opinion.id, "opinions:", this.state.opinions)})
    )
  }

  render(){
    return (
      <div className="decision-container">
        <DecisionList createDecision={this.createDecision} createOutcome={this.createOutcome} createOpinions={this.createOpinions}/>
      </div>
    )
  }
}
