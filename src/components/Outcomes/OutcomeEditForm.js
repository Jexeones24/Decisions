import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


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

  handleSubmit = (e) => {
    let content = this.state.content
    let id = this.props.outcome.id
    e.preventDefault();
    this.props.editOutcome(content, id)
  }

  render() {
    return (
      <div className="outcome-edit-form">
        <Form reply onSubmit={this.handleSubmit.bind(this)}>
          <Form.TextArea type="text" placeholder="Edit Outcome" value={this.state.content} onChange={this.handleChange} name="content"/>
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </div>
    )
  }
}
