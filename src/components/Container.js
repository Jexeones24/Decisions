import React, { Component } from 'react'
import Decision from './Decision'
import Outcome from './Outcome'
import Opinion from './Opinion'
import DecisionAdapter from '../adapters/DecisionAdapter'

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

  render(){
    return (
      <div className="container">
        <div className="decision-section">
          <Decision createDecision={this.createDecision}
          deleteDecision={this.deleteDecision}
          editDecision={this.editDecision}
          decisions={this.state.decisions}/>
        </div>
        <div className="outcome-section">
          <Outcome />
        </div>
        <div className="opinion-section">
          <Opinion />
        </div>
      </div>
    )
  }
}
