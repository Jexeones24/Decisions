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
  }

  render(){
    return (
        // 
        // <form onSubmit={this.handleSubmit}
        //   className="decision-form-field">
        //   <input type="text" placeholder="Decision" value={this.state.content} onChange={this.handleChange} name="content"/>
        //   <button className="decision-submit-btn">Submit</button>
        // </form>
        <div className="decision-form">
        <Comment.Group>
          <Header as='h1' dividing>DECISION</Header>
        <Comment>
           <Comment.Avatar src='/assets/images/avatar/small/joe.jpg' />
           <Comment.Content>
             <Comment.Author as='a'>Current User</Comment.Author>
             <Comment.Metadata>
               <div>5 days ago</div>
             </Comment.Metadata>
             <Comment.Text>
               What's weighing on your mind...
             </Comment.Text>
             <Comment.Actions>
               <Comment.Action>Add outcomes</Comment.Action>
             </Comment.Actions>
           </Comment.Content>
         </Comment>

         <Form reply>
           <Form.TextArea type="text" placeholder="Decision" value={this.state.content} onChange={this.handleChange} name="content"/>
           <Button content='Submit Decision' labelPosition='left' icon='edit' primary />
         </Form>
         </Comment.Group>
      </div>
    )
  }
}
