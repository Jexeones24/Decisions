import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


export default class DecisionForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content }, () => {console.log(content)})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createDecision(this.state)
    this.setState({ content: '' })
  }

  // as='a' is link to profile page??
  // on submit, take away the form, display the decision really big!
  render(){
    return (
      <div className="decision-form">
        <Comment.Group>
          <Header as='h1' dividing>DECISION</Header>
        <Comment>
          <Comment.Avatar src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?dpr=2&auto=format&fit=crop&w=1199&h=1493&q=80&cs=tinysrgb&crop=' />
          <Comment.Content>
           <Comment.Author as='a'>CURRENT USER</Comment.Author>
           <Comment.Metadata>
             <div>5 days ago</div>
           </Comment.Metadata>
           <Comment.Text as='h2'>
             Give a brief description of what's weighing on your mind...
           </Comment.Text>
           <Comment.Actions>
             <Comment.Action>Add Decision</Comment.Action>
           </Comment.Actions>
          </Comment.Content>
        </Comment>

         <Form reply onSubmit={this.handleSubmit}>
           <Form.TextArea type="text" placeholder="Decision" value={this.state.content} onChange={this.handleChange} name="content" required/>
           <Button content='Submit Decision' labelPosition='left' icon='edit' primary />
         </Form>
         </Comment.Group>
      </div>
    )
  }
}
