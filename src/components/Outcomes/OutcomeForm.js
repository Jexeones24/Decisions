import React, { Component } from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      hideMe: false
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
    this.setState({
      content: '',
      hideMe: !this.state.hideMe
    }, () => { this.props.toggleOutcomeForm(this.state.hideMe)})
  }

  render(){
    return (
      <div className="outcome-form">
        <Comment.Group>
          <Comment>
            <h2><label htmlFor="">DESCRIBE A POSSIBLE OUTCOME</label></h2>
            <Comment.Actions>
              <Comment.Action>Risk | Reward</Comment.Action>
            </Comment.Actions>
            <Form reply onSubmit={this.handleSubmit.bind(this)}>
              <Form.TextArea type="text" placeholder="Outcome" value={this.state.content} onChange={this.handleChange} name="content" required/>
              <Button content='Submit Outcome' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}
