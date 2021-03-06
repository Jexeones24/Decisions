import React, { Component } from 'react'
import OutcomeForm from './OutcomeForm'
import Opinion from '../Opinions/Opinion'

export default class Outcome extends Component {
  constructor() {
    super();

    this.state = {
      opinionFormVisible: false,
      outcomeId: null
    }
  }

  getOutcomeId = (outcomeId) => {
    this.setState({
      opinionFormVisible: !this.state.opinionFormVisible,
      outcomeId: outcomeId })
  }

  render(){

    let displayForm = () => {
      return this.state.showOutcomeForm ? <div className="outcome-form">
        <OutcomeForm decisionId={this.props.decisionId} createOutcome={this.props.createOutcome}
        outcomes={this.props.outcomes}/>
      </div> : null
    }

    return (
      <div className="outcome">
        <h2>OUTCOME</h2>
        {this.displayForm()}

          {this.state.opinionFormVisible ? <div className="opinion-section"><Opinion outcomeId={this.state.outcomeId} createOpinion={this.props.createOpinion}
          deleteOpinion={this.props.deleteOpinion}
          editOpinion={this.props.editOpinion} opinions={this.props.opinions}/></div> : null}
      </div>
    )
  }
}
