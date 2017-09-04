import React, { Component } from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'


export default class OpinionForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      value: null
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  handleClick = (e) => {
    (e.target.name === 'risk') ? this.setState({value: false}) :
    this.setState({ value: true })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let outcomeId = this.props.outcomeId
    let content = this.state.content
    let value = this.state.value
    this.props.createOpinion(content, outcomeId, value)
  }

  render(){
    return (
      <div className="opinion-form">
        <Comment.Group>
          <Comment>
            <Comment.Actions>
              <Comment.Action>Risk | Reward</Comment.Action>
            </Comment.Actions>
            <Form reply onSubmit={this.handleSubmit}>
              <Form.TextArea type="text" placeholder="Opinion" value={this.state.content} onChange={this.handleChange} name="content" required/>
              <Button content='Submit Opinion' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment>
        </Comment.Group>
      </div>
    )
  }
}
