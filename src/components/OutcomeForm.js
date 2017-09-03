import React, { Component } from 'react'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let content = this.state.content
    let decisionId = this.props.decisionId
    this.props.createOutcome(content, decisionId)
  }

  render(){
    return (
      <div className="outcome-form">
        <form className="outcome-form-field" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Outcome" value={this.state.content} onChange={this.handleChange}/>
          <button name="outcome-submit-form">Submit</button>
        </form>
      </div>
    )
  }
}
