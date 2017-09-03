import React, { Component } from 'react'
import DecisionForm from './DecisionForm'
import DecisionContent from './DecisionContent'
import Outcome from './Outcome'

export default class Decision extends Component {
  constructor() {
    super();

    this.state = {
      outcomeFormVisible: false,
      decisionId: null
    }
  }

  handleDelete = () => {
    this.props.deleteDecision(this.props)
  }

  getDecisionId = (decisionId) => {
    this.setState({
      outcomeFormVisible: !this.state.outcomeFormVisible,
      decisionId: decisionId })
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
            decision={decision} id={decision.id} key={idx} deleteDecision={this.props.deleteDecision} editDecision={this.props.editDecision}
            getDecisionId={this.getDecisionId}/>)}
        </div>
        {this.state.outcomeFormVisible ? <div className="outcome-section"><Outcome
          decisionId={this.state.decisionId} createOutcome={this.props.createOutcome}
          deleteOutcome={this.props.deleteOutcome}
          editOutcome={this.props.editOutcome}
          outcomes={this.props.outcomes}
          createOpinion={this.props.createOpinion}
          deleteOpinion={this.props.deleteOpinion}
          editOpinion={this.props.editOpinion}
          opinions={this.props.opinions}
          /></div> : null}
      </div>
    )
  }
}
