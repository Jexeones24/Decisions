import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'

export default class DecisionContent extends Component {
  constructor() {
    super();

    this.state = {
      editFormVisible: false
    }
  }

  handleDelete = () => {
    this.props.deleteDecision(this.props)
  }

  formVisible = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }

  getId = () => {
    let decisionId = this.props.decision.id
    this.props.getDecisionId(decisionId)
  }

  render(){
    return (
      <div className="decision-display">
        <h3>{this.props.decision.content}
          <button onClick={this.handleDelete}>-</button>
          <button onClick={this.formVisible}>edit</button>
          <button onClick={this.getId.bind(this)}>add outcome</button>
          {this.state.editFormVisible ? <div className="edit-form"><DecisionEditForm editDecision={this.props.editDecision} decision={this.props.decision} id={this.props.idx}/></div> : null}
        </h3>
      </div>
    )
  }
}
