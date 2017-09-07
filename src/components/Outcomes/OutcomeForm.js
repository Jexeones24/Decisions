import React, { Component } from 'react'
import { Button, Comment, Form, TextArea } from 'semantic-ui-react'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let content = this.state.content
    let decisionId = this.props.decisionObject.decision.id
    this.props.createOutcome(content, decisionId)
    this.setState({ content: '' })
    //how do i hide this form after submit???
  }


  addOutcome = (e) => {
    console.log("add outcome", this.state.content, this.props.decisionId)
    this.props.createOutcome(this.state.content, this.props.decisionId)
  }


  render(){
    return (
      <div className="outcome-form">
        <Form onSubmit={this.addOutcome.bind(this)}><TextArea value={this.state.content}
        onChange={this.handleChange.bind(this)} required/><button type="submit">submit</button></Form>
      </div>
    )
  }
}
