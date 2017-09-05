import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'


export default class DecisionShow extends Component {

  constructor(){
    super();

    this.state = {
      editFormVisible: false,
      decisionId: null
    }
  }

  handleEdit = () => {
    console.log(this.props.decision.decision)
      this.setState({
        editFormVisible: !this.state.editFormVisible,
        decisionId: this.props.decision.decision.id
      })
    // needs to render the form first
    // this.props.editDecision(this.props.decision.decision)
  }

  // formVisible = () => {
  //   debugger
  //   this.setState({
  //     editFormVisible: !this.state.editFormVisible,
  //     decisionId: this.props.decision.decision.id
  //   })
  // }

  handleDelete = () => {
    console.log(this.props.decision.decision)
    this.props.deleteDecision(this.props.decision.decision)
  }

  handleAddOutcome = () => {
    console.log(this.props.decision.decision)
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }



  backToIndex = () => {
    this.backToIndex
  }

  render(){
    let content = this.props.decision.decision.content
    let id = this.props.decision.decision.id
    let outcomes = this.props.decision.outcomes
    let opinions = this.props.decision.opinions[0]
    return (
      <div className="decision-show">
        <h1>{content}</h1>
        <h4>ID: {id}</h4>
        {(outcomes.length) ? outcomes.map((outcome, idx) => <h3 key={idx}> Outcome #{outcome.id}: {outcome.content}</h3>) : 'No outcomes submitted'}
        {(opinions !== undefined) ? opinions.map((opinion, idx) => <h3 key={idx}> Outcome #{opinion.id}: {opinion.content}</h3>) : 'No opinions submitted'}
        <button onClick={this.handleEdit.bind(this)}>Edit</button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.handleAddOutcome.bind(this)}>Add Outcome</button>
        <button onClick={this.backToIndex}>Back</button>

        {this.state.editFormVisible ? <div className="edit-form"><DecisionEditForm
        decisionId={this.state.decisionId} editDecision={this.props.editDecision} decision={this.props.decision} id={this.props.idx}/></div> : null}

      </div>
    )
  }
}
