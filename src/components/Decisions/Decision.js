import React, { Component } from 'react'
import DecisionForm from './DecisionForm'
import DecisionContent from './DecisionContent'
import Outcome from '../Outcomes/Outcome'


export default class Decision extends Component {
  constructor() {
    super();

    this.state = {
      outcomeFormVisible: false,
      showAll: false,
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
    let currentUser = this.props.currentUser.username
    return (
      <div className="decision">
        {this.state.showAll ? <div className="decision-display">
          {this.props.decisions.map((decision, idx) => <DecisionContent
            decision={decision} id={decision.id} key={idx} deleteDecision={this.props.deleteDecision} editDecision={this.props.editDecision}
            getDecisionId={this.getDecisionId}/>)}
         </div> : <div className="decision-form">
           <DecisionForm currentUser={currentUser.toUpperCase()} createDecision={this.props.createDecision}/>
         </div>}

        {this.state.outcomeFormVisible ? <div className="outcome-section"><Outcome
          showOutcomeForm={this.props.showOutcomeForm}
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
