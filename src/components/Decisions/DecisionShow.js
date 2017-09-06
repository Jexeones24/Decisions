import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import { Link } from 'react-router-dom'

export default class DecisionShow extends Component {
  constructor(){
    super();

    this.state = {
      decisionObject: {},
      editFormVisible: false,
      outcomeFormVisible: false
    }
  }

  componentDidMount(){
    DecisionAdapter.showDecision(this.props.decisionId)
      .then( decisionObject => { this.setState({
        decisionObject
      }, () => {console.log(this.state.decisionObject.decision)})
    })
  }

  handleEdit = (e) => {
    console.log("decision id:", this.props.decisionId)
      this.setState({
        editFormVisible: !this.state.editFormVisible
    }, () => {console.log(this.state)})
  }

  handleDelete = (e) => {
    this.props.deleteDecision(this.props.decisionId)
    this.props.history.goBack()
  }

  handleAddOutcome = (e) => {
    console.log("decisionID:", this.props.decisionId, this.props)
    this.setState({ outcomeFormVisible: !this.state.outcomeFormVisible })
  }

  toggleOutcomeForm = (e) => {
    console.log(e)
    if(e === true){
      this.setState({ outcomeFormVisible: !this.state.outcomeFormVisible})
    }
  }

  // can we loop over indiv arrays of outcomes/opinions and filter to display???
  render(){
    console.log(this.props)
    let decisionHTML = () => {
      return (
        <div>
          <h1>{this.state.decisionObject.decision.content}</h1>
          <ul>
            {(this.state.decisionObject.outcomes.length === true) ? this.state.decisionObject.outcomes[0].map((o, idx) => <li key={idx}>{o.content}</li>) : <li>'No outcomes submitted'</li>}

            {(this.state.decisionObject.opinions.length === true) ?
            this.state.decisionObject.opinions.map((o, idx) => <li key={idx}>{o.content}</li>) : <li>'No opinions submitted'</li>}
          </ul>

          {this.state.editFormVisible ? <div className="edit-form"><DecisionEditForm
          content={this.state.content}
          decisionId={this.state.decisionObject.decision.id} editDecision={this.props.editDecision} decision={this.props.decision} id={this.props.idx}/></div> : null}

          {this.state.outcomeFormVisible ? <OutcomeForm createOutcome={this.props.createOutcome} decisionObject={this.state.decisionObject}
          toggleOutcomeForm={this.toggleOutcomeForm}/> : null}
        </div>
      )
    }

    return (
      <div className="decision-show">
        {this.state.decisionObject.decision ? decisionHTML() : 'empty'}
        <button onClick={this.handleEdit.bind(this)}>Edit</button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.handleAddOutcome.bind(this)}>Add Outcome</button>
        <Link to="/"><button onClick={this.backToIndex}>Back</button></Link>
      </div>
    )
  }
}
