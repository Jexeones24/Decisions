import React, { Component } from 'react'

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
      <div className="decision-form">
        <form onSubmit={this.handleSubmit}
          className="decision-form-field">
          <input type="text" placeholder="Decision" value={this.state.content} onChange={this.handleChange} name="content"/>
          <button className="decision-submit-btn">Submit</button>
        </form>
      </div>
    )
  }
}
