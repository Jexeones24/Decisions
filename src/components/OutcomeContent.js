import React, { Component } from 'react'
import OutcomeEditForm from './OutcomeEditForm'

export default class OutcomeContent extends Component {
  constructor() {
    super();

    this.state = {
      editFormVisible: false
    }
  }

  handleDelete = () => {
    this.props.deleteOutcome(this.props)
  }

  formVisible = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }

  getId = () => {
    let outcomeId = this.props.outcome.id
    this.props.getOutcomeId(outcomeId)
  }

  render(){
    return (
      <div className="outcome-display">
        <h3>{this.props.outcome.content}
          <button onClick={this.handleDelete}>-</button>
          <button onClick={this.formVisible}>edit</button>
          <button onClick={this.getId.bind(this)}>add opinion</button>
          {this.state.editFormVisible ? <div className="edit-form"><OutcomeEditForm editOutcome={this.props.editOutcome} outcome={this.props.outcome} id={this.props.idx}/></div> : null}
        </h3>
      </div>
    )
  }
}
