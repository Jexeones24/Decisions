import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import PCForm from './PCForm'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      showPCForm: false,
      content: "",
      disabled: false,
      buttonVisibility: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showPCForm: !this.state.showProConForm ,
      disabled: !this.state.disabled,
      buttonVisibility: !this.state.buttonVisibility,
    })
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  getOpinions = (pros, cons) => {
    console.log(pros, cons)
  }

  render (){
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
            <h1><label>OUTCOME</label></h1>
            <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={150} autoHeight placeholder='Possible outcomes...' type="text" onChange={this.handleChange}/> <i className="pencil"></i>
            {this.state.buttonVisibility && <Button circular icon='add' />}
          </Form.Field>
        </Form>
        {this.state.showPCForm && <PCForm getOpinions={this.getOpinions}/>}
      </div>
    )
  }
}

// can enable spellcheck?/validate for empty fields
// move add button after click
