import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import PCForm from './PCForm'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      showPCForm: false,
      outcomeInput: "",
      disabled: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showPCForm: !this.state.showProConForm ,
      disabled: !this.state.disabled
    })
  }

  handleChange = (e) => {
    let outcomeInput = e.target.value
    this.setState({ outcomeInput })
  }

  render (){
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
            <h1><label>POSSIBLE OUTCOME</label></h1>
            <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={150} autoHeight placeholder='Possible outcomes...' type="text" onChange={this.handleChange}/> <i className="pencil"></i>
            <Button circular icon='add' />
          </Form.Field>
        </Form>
        {this.state.showPCForm && <PCForm />}
      </div>
    )
  }
}


// can enable spellcheck?
// when click add --> add pros and cons to option item(accordion), so can drag and drop to organize
