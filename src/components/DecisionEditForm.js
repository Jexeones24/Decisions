import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class DecisionEditForm extends Component {
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
    e.preventDefault();
    this.props.editDecision(content, this.props.decision.id)
  }

  render() {
    return (
      <div className="decision-edit-form">
        <Form reply onSubmit={this.handleSubmit.bind(this)}>
          <Form.TextArea type="text" placeholder="Edit Decision" value={this.state.content} onChange={this.handleChange} name="content"/>
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </div>
    )
  }
}
