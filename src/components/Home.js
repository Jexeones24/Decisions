import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Decision from './Decisions/Decision'
import Outcome from './Outcomes/Outcome'
import DecisionAdapter from '../adapters/DecisionAdapter'
import OutcomeAdapter from '../adapters/OutcomeAdapter'
import OpinionAdapter from '../adapters/OpinionAdapter'
import DecisionIndex from './Decisions/DecisionIndex'
import DecisionShow from './Decisions/DecisionShow'
import { Button } from 'semantic-ui-react'



export default class Container extends Component {
  constructor(){
    super();

    this.state = {
      decision: [],
      decisionObject: {},
      outcomes: [],
      opinions: [],
      decisionFormVisible: false,
      showDecision: false,
      outcomeFormVisible: false
    }
  }

  createDecision = (decision) => {
    DecisionAdapter.createDecision(decision)
      .then( decision => this.setState({ decision }, () => {console.log(this.state.decision)})
    )
  }

  deleteOutcome = (outcome) => {
    OutcomeAdapter.deleteOutcome(outcome.id)
      .then( newOutcomes => this.setState({ outcomes: newOutcomes })
    )
  }

  editOutcome = (content, id) => {
    OutcomeAdapter.editOutcome(content, id)
      .then( newOutcome => {
        let index = this.state.outcomes.findIndex( outcome => outcome.id === id )
        this.setState({
          outcomes: [
           ...this.state.outcomes.slice(0,index),
           Object.assign({}, this.state.outcomes[index], newOutcome),
           ...this.state.outcomes.slice(index+1)
         ]
       }, () => {console.log(this.state.outcomes)});
    })
  }


  createOpinion = (content, outcomeId, value) => {
    OpinionAdapter.createOpinion(content, outcomeId, value)
      .then( opinion => this.setState({ opinions: [...this.state.opinions, opinion]}, () => {console.log(this.state.opinions)})
    )
  }

  deleteOpinion = (opinion) => {
    console.log("delete opinion", opinion.opinion.id)
    OpinionAdapter.deleteOpinion(opinion.opinion.id)
      .then( newOpinions => this.setState({ opinions: newOpinions })
    )
  }

  editOpinion = (content, id) => {
    OpinionAdapter.editOpinion(content, id)
      .then( newOpinion => {
        let index = this.state.opinions.findIndex( opinion => opinion.id === id )
        this.setState({
          opinions: [
           ...this.state.opinions.slice(0,index),
           Object.assign({}, this.state.opinions[index], newOpinion),
           ...this.state.opinions.slice(index + 1)
         ]
       }, () => {console.log(this.state.opinions)});
    })
  }

  showDecisionForm = () => {
    this.setState({ decisionFormVisible: !this.state.decisionFormVisible })
  }

  render(){
    let decisionsToDisplay = () => {
      return this.state.showDecision ? [] : this.props.decisions
    }

    return (
      <div className="container">
        <nav>
          <ul>
            <button onClick={this.showDecisionForm}>NEW DECISION</button>
          </ul>
        </nav>
        <article>
          {this.state.decisionFormVisible ?
          <div className="decisions">
            <Decision
              decision={this.state.decision}
              currentUser={this.props.currentUser}
              showOutcomeForm={this.state.outcomeFormVisible}
              decision={this.state.decisionObject} createDecision={this.createDecision}
              deleteDecision={this.deleteDecision}
              editDecision={this.editDecision}
              decisions={this.state.decisions}
              createOutcome={this.createOutcome}
              deleteOutcome={this.deleteOutcome}
              editOutcome={this.editOutcome}
              outcomes={this.state.outcomes}
              createOpinion={this.createOpinion}
              deleteOpinion={this.deleteOpinion}
              editOpinion={this.editOpinion}
              opinions={this.state.opinions}/>
          </div> :
          <div className="decisions">
            <DecisionIndex
              decisions={decisionsToDisplay()}/>
          </div>}
        </article>
      </div>
    )
  }
}
