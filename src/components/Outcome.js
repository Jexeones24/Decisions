import React, { Component } from 'react'
import OutcomeForm from './OutcomeForm'
import OutcomeContent from './OutcomeContent'

export default class Outcome extends Component {
  constructor() {
    super();

  }

  render(){
    return (
      <div className="outcome">
        <h2>OUTCOME</h2>
        <div className="outcome-form">
          <OutcomeForm decisionId={this.props.decisionId} createOutcome={this.props.createOutcome}
          outcomes={this.props.outcomes}/>
        </div>
        <div className="outcome-display">
          {this.props.outcomes.map((outcome, idx) => <OutcomeContent outcome={outcome} id={outcome.id} key={idx} deleteOutcome={this.props.deleteOutcome}
          editOutcome={this.props.editOutcome}/>)}
        </div>
      </div>
    )
  }
}
