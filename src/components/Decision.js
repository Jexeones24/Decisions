import React, { Component } from 'react'
import DecisionForm from './DecisionForm'
import DecisionContent from './DecisionContent'

export default class Decision extends Component {
  constructor() {
    super();
  }

  handleDelete = () => {
    this.props.deleteDecision(this.props)
  }


  render(){
    return (
      <div className="decision">
        <h2>DECISION</h2>
        <div className="decision-form">
          <DecisionForm createDecision={this.props.createDecision}/>
        </div>
        <div className="decision-display">
          {this.props.decisions.map((decision, idx) => <DecisionContent
            decision={decision} id={decision.id} key={idx} deleteDecision={this.props.deleteDecision} editDecision={this.props.editDecision}/>)}
        </div>
      </div>
    )
  }
}
