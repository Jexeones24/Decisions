import React, { Component } from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

export default class OutcomeForm extends Component {
  constructor() {
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
    e.preventDefault();
    let content = this.state.content
    let decisionId = this.props.decisionId
    this.props.createOutcome(content, decisionId)
  }

  render(){
    return (
      <div className="outcome-form">
        <Comment.Group>
          <Comment>
            <Comment.Actions>
              <Comment.Action>Risk | Reward</Comment.Action>
            </Comment.Actions>
            <Form reply onSubmit={this.handleSubmit}>
              <Form.TextArea type="text" placeholder="Outcome" value={this.state.content} onChange={this.handleChange} name="content" required/>
              <Button content='Submit Outcome' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}
