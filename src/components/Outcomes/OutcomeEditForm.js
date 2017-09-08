import React, { Component } from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'


export default class OutcomeEditForm extends Component {
  constructor(){
    super();

    this.state = {
      content: ''
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  submitEdit = (e) => {
    let content = this.state.content
    let id = this.props.outcome.id
    e.preventDefault();
    this.props.editOutcome(content, id)
  }

  render() {
    return (
      <div className="outcome-edit-form">
        <Form onSubmit={this.submitEdit.bind(this)}><TextArea placeholder="Edit Outcome" value={this.state.content}
        onChange={this.handleChange.bind(this)} required/><button type="submit">+</button></Form>
      </div>
    )
  }
}
