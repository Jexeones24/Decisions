import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import OutcomeForm from './OutcomeForm'

export default class DecisionList extends Component {
  constructor(){
    super();

    this.state = {
      content: "",
      showOutcomeForm: false,
      buttonVisibility: true,
      disabled: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showOutcomeForm: !this.state.showOutcomeForm,
      buttonVisibility: !this.state.buttonVisibility,
      disabled: !this.state.disabled
    })
    this.props.createDecision(this.state.content)
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  newOutcomeForm = () => {
    this.setState({ newOutcomeForm: !this.state.newOutcomeForm })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <h1><label>WHAT'S YOUR LIFE'S STRIFE?</label></h1>
              <div className="decision-bar">
              <TextArea spellCheck="true"  disabled={(this.state.disabled) ? "disabled" : ""} maxLength={200} autoHeight placeholder='Should I...' type="text" onChange={this.handleChange}/>
              {this.state.buttonVisibility && <Button icon='add' />}
            </div>
          </Form.Field>
        </Form>
        {this.state.showOutcomeForm && <OutcomeForm createOutcome={this.props.createOutcome} createOpinions={this.props.createOpinions}/>}
      </div>
    )
  }
}


// limit characters
// make sure it's real content
// only allow + click and form to appear if content is in box
  // want button to disappear
  // want content to be condensed and centered
