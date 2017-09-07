import React, { Component } from 'react'
import { Button, Comment, Form, TextArea } from 'semantic-ui-react'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
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
  }


  addOutcome = (e) => {
    console.log("add outcome", this.state.content, this.props.decisionId)
    this.props.createOutcome(this.state.content, this.props.decisionId)
    // this.setState({ outcomeFormVisible: !this.state.outcomeFormVisible })
  }

  render(){
    return (
      <div className="outcome-form">

        <Form onSubmit={this.addOutcome.bind(this)}><TextArea value={this.state.content}
        onChange={this.handleChange.bind(this)} required/><button type="submit" >+</button></Form>
        {/* <Comment.Group>
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
        </Comment.Group> */}
      </div>
    )
  }
}
