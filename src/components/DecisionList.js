import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import OutcomeForm from './OutcomeForm'

export default class DecisionList extends Component {
  constructor(){
    super();

    this.state = {
      input: "",
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
    this.props.getDecision(this.state.input)
  }

  handleChange = (e) => {
    let input = e.target.value
    this.setState({ input })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <h1><label>DECISION</label></h1>
              <div className="decision-bar">
              <i className="search icon"></i>
              <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={200} autoHeight placeholder='Enter your decision...' type="text" onChange={this.handleChange}/>
              {this.state.buttonVisibility && <Button circular icon='add' />}
            </div>
          </Form.Field>
        </Form>
        {this.state.showOutcomeForm && <OutcomeForm />}
      </div>
    )
  }
}


// limit characters
// make sure it's real content
// only allow + click and form to appear if content is in box
  // want button to disappear
  // want content to be condensed and centered
