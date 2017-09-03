import React, { Component } from 'react'
import DecisionList from './DecisionList'
import DecisionAdapter from '../adapters/DecisionAdapter'
import OutcomeAdapter from '../adapters/OutcomeAdapter'
import OpinionAdapter from '../adapters/OpinionAdapter'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    // all decisions are being saved - why?
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

  deleteDecision = () => {
    console.log("deleting", this.state.decision)
    let id = this.state.decision.id
    DecisionAdapter.deleteDecision(id)
      //am i missing a .then?
    this.setState({ decision: [] }, () => {
      console.log(this.state.decision)
    })
  }

  editDecision = (content) => {
    console.log("editing", this.state.decision, "content:", content)
    let id = this.state.decision.id
    DecisionAdapter.editDecision(content, id)
      .then( newDecision => this.setState({
      decision: newDecision
      }, () => { console.log(this.state.decision)})
    )
  }

  createOutcome = (content, id) => {
    OutcomeAdapter.createOutcome(content, this.state.decision.id)
      .then( outcome => this.setState({
        outcomes: [...this.state.outcomes, outcome]
      }, () => { console.log("Added outcome:", this.state.outcomes) })
    )
  }

  deleteOutcome = (content) => {
    let outcome = this.state.outcomes.filter((o) => o.content === content )
    OutcomeAdapter.deleteOutcome(outcome[0].id)
    let newOutcomes = this.state.outcomes.filter((o) => o.id !== outcome.id)
    this.setState({ outcomes: newOutcomes })
  }


  // not getting new content
  editOutcome = (content) => {
    console.log("edit in decision container, new content:", content)
    let outcome = this.state.outcomes.filter((o) => o.content === content)
    let id = outcome[0].id
    OutcomeAdapter.editOutcome(content, id)
    .then( newOutcome => {
      let index = this.state.outcomes.findIndex( outcome => outcome.id === id)
      this.setState({ outcomes: [
        ...this.state.outcomes.slice(0, index),
        Object.assign({}, this.state.outcomes[index], newOutcome),
        ...this.state.outcomes.slice(index + 1)
      ]
    }, () => { console.log(this.state.outcomes)});
  })
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
        <div className="decision-list">
          <DecisionList
            createDecision={this.createDecision}
            deleteDecision={this.deleteDecision}
            editDecision={this.editDecision} createOutcome={this.createOutcome}
            deleteOutcome={this.deleteOutcome}
            editOutcome={this.editOutcome} createOpinions={this.createOpinions}
            />
        </div>
      </div>
    )
  }
}

// let outcome = this.state.outcomes.filter((o) => o.content === content)
// console.log(outcome)
// let id = outcome[0].id
// console.log(id)
// OutcomeAdapter.editOutcome(content, id)
//   .then( newOutcome => {
//     let index = this.state.outcomes.findIndex( outcome => outcome.id === id)
//     this.setState({ outcomes: [
//       ...this.state.outcomes.slice(0, index),
//       Object.assign({}, this.state.outcomes[index], newOutcome),
//       ...this.state.outcomes.slice(index + 1)
//     ]
//   }, () => { console.log(this.state.outcomes)});
// })
