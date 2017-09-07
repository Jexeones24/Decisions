import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import OutcomeForm from '../Outcomes/OutcomeForm'

export default class DecisionForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      renderOutcomeForm: false
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    this.props.createDecision(this.state)
    this.setState({
      content: '',
    })
    // re-route to show
  }


  render(){
    return (
      <div>
        {this.state.renderOutcomeForm ?
          <OutcomeForm decision={this.props.decision}/> :

          <div className="decision-form">
            <Comment.Group>
              <Header as='h1' dividing>DECISION</Header>
            <Comment>
              <Comment.Avatar src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?dpr=2&auto=format&fit=crop&w=1199&h=1493&q=80&cs=tinysrgb&crop=' />
              <Comment.Content>
               <Comment.Author as='a'><h3>{this.props.currentUser}</h3></Comment.Author>
               <Comment.Metadata>
                 <div>5 days ago</div>
               </Comment.Metadata>
               <Comment.Text as='h2'>
                 <div>
                   <h3>Give a brief description of what's weighing on your mind...</h3>
                 </div>
               </Comment.Text>
               <Comment.Actions>
                 <Comment.Action></Comment.Action>
               </Comment.Actions>
              </Comment.Content>
            </Comment>

           <Form reply onSubmit={this.handleSubmit.bind(this)}>
             <Form.TextArea type="text" placeholder="Decision" value={this.state.content} onChange={this.handleChange} name="content" required/>
             <Button content='Submit Decision' labelPosition='left' icon='edit' primary />
           </Form>
           </Comment.Group>
          </div>}
        </div>
    )
  }
}
