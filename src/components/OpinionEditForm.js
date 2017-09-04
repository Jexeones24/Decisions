import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class OpinionEditForm extends Component {
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
    let id = this.props.opinion.id
    e.preventDefault();
    this.props.editOpinion(content, id)
  }

  render() {
    return (
      <div className="opinion-edit-form">
        <Form reply onSubmit={this.handleSubmit.bind(this)}>
          <Form.TextArea type="text" placeholder="Edit Opinion" value={this.state.content} onChange={this.handleChange} name="content"/>
          <Button content='Submit' labelPosition='left' icon='edit' primary />
        </Form>
      </div>
    )
  }
}
