import React, { Component } from 'react'
import { Form, Button, Icon, Input } from 'semantic-ui-react'

export default class PCForm extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      pros: [],
      cons: []
    }
  }

  addProForm = () => {
    // if(pro) ? set pro state : else set con state
    // first element in array is an empty string
    this.setState({ pros: [...this.state.pros, '']})
  }

  addProToState = (e) => {
    let pro = this.state.text
    this.setState({ pros: [...this.state.pros, pro]}, () => {
      console.log("new pro addded", this.state.pros)
    })
    // make it disappear
    // make a badge appear --> pass pros and cons to OutcomeForm?
    let pros = this.state.pros
    let cons = this.state.cons
    this.props.getOpinions(pros, cons)
  }

  handlePro = (idx) => (event) => {
    let text = event.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div className="pro-con-form">
        <h4>ADD PRO OR CON</h4>
        <Button icon onClick={this.addProForm}>
          <Icon name='pointing up' />
        </Button>
        <Button icon onClick={this.addConForm}>
          <Icon name='pointing down' />
        </Button>
          {this.state.pros.map((pro, idx) => <div className="pro" key={idx}>
          <Input type="text" placeholder='Pro...' onChange={this.handlePro(idx)}/>
          <Button basic color='black' onClick={this.addProToState}>ADD</Button>
        </div>)}
      </div>
    )
  }
}

// change the form field based on click of pro or con
//check to make sure field is not empty before submitting
// dynamically generate these and number them using index + 1
  // once submit, they become a badge
    // click on badge to see pros/cons -> badge counts how many of each
// add icons to forms -> add, edit, delete
