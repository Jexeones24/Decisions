import React, { Component } from 'react'
import DecisionForm from './DecisionForm'
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

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    // this.setState({decisionId: nextProps.})
  }

  // getDecisionId = (decisionId) => {
  //   this.setState({
  //     outcomeFormVisible: !this.state.outcomeFormVisible,
  //     decisionId: decisionId })
  // }

  render(){
    let currentUser = this.props.currentUser.username
    return (
      <div>
      <div className="decision-form">
        <DecisionForm currentUser={currentUser.toUpperCase()} createDecision={this.props.createDecision}
        deleteDecision={this.deleteDecision}
        editDecision={this.editDecision}
        createOutcome={this.createOutcome}
        deleteOutcome={this.deleteOutcome}
        editOutcome={this.editOutcome}
        createOpinion={this.createOpinion}
        deleteOpinion={this.deleteOpinion}
        editOpinion={this.editOpinion}/>
      </div>

        {this.state.outcomeFormVisible ? <div className="outcome-section"><Outcome
          decision={this.props.decision}
          // showOutcomeForm={this.props.showOutcomeForm}
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
