import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export default class DecisionList extends Component {
  constructor(){
    super();

    this.state = {
      input: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
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
            <label>DECISION</label>
            <textarea type="text" onChange={this.handleChange} />
            <Button>Submit</Button>
          </Form.Field>
        </Form>
      </div>
    )
  }
}


// limit characters
// make sure it's real content
