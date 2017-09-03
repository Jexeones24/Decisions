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
      decisions: [],
      outcomes: [],
      opinions: [],
    }
    this.editDecision = this.editDecision.bind(this)
  }


  // currentUser_id is harcoded
  createDecision = (content) => {
    DecisionAdapter.createDecision(content)
      .then( decision => this.setState({
        decisions: [...this.state.decisions, decision] }, () => {
          console.log(this.state.decisions)
        })
    )
  }


  deleteDecision = (content) => {
    let decision = this.state.decisions.filter((d) => d.content === content)
    let id = decision[0].id
    DecisionAdapter.deleteDecision(id)
      let newDecisions = this.state.decisions.filter((d) => d.id !== id)
        this.setState({ decisions: newDecisions }, () => {
          console.log(this.state.decisions)
      })
  }

  editDecision = (content) => {

    var decision = this.state.decisions.filter((d) => d.content === content)
    var id = decision[0].id

    DecisionAdapter.editDecision(content, id)
      .then( newDecision => {
        let index = this.state.decisions.findIndex( decision => decision.id === id)
        this.setState({
          decisions: [
           ...this.state.decisions.slice(0,index),
           Object.assign({}, this.state.decisions[index], newDecision ),
           ...this.state.decisions.slice(index + 1)
         ]
       });
      }
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

  createOpinion = (text, value) => {
    let outcome = this.state.outcomes.slice(-1)[0]

    OpinionAdapter.createOpinion(text, outcome.id, value)
      .then( opinion => this.setState({
        opinions: [...this.state.opinions, opinion],

      }, () => { console.log("id:", opinion.id, "opinions:", this.state.opinions)})
    )
  }

  deleteOpinion = (content) => {
    let opinion = this.state.opinions.filter((o) => o.content === content)
    OpinionAdapter.deleteOpinion(opinion[0].id)
      let newOpinions = this.state.opinions.filter((o) => o.id !== opinion[0].id)
      this.setState({ opinions: newOpinions }, () => {console.log(this.state.opinions)})
  }


  render(){
    return (
      <div className="decision-container">
        <div className="decision-list">
          <DecisionList
            decision={this.state.decision}
            outcomes={this.state.outcomes}
            opinions={this.state.opinions}
            createDecision={this.createDecision}
            deleteDecision={this.deleteDecision}
            editDecision={this.editDecision} createOutcome={this.createOutcome}
            deleteOutcome={this.deleteOutcome}
            editOutcome={this.editOutcome} createOpinion={this.createOpinion}
            deleteOpinion={this.deleteOpinion}
            />
        </div>
      </div>
    )
  }
}
