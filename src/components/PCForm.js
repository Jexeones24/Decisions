import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import Pro from './Pro'
import Con from './Con'


export default class PCForm extends Component {
  constructor() {
    super();

    this.state = {
      pros: [],
      cons: []
    }
  }

  handleSubmit = (e) => {
    console.log("in handle submit", e.target.value)
  }

  handleChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Group>
            PRO
            <Pro />
            CON
            <Con />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}



// dynamically generate these and number them using index + 1
// pro/con item should be a dummy component
  // once submit, they become a badge
    // click on badge to see pros/cons -> badge counts how many of each
// add icons to forms -> add, edit, delete
