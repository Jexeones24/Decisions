import React, { Component } from 'react'

export default class OutcomeEditForm extends Component {
  constructor(){
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
    let content = this.state.content
    let id = this.props.outcome.id
    e.preventDefault();
    this.props.editOutcome(content, id)
  }

  render() {
    return (
      <div className="outcome-edit-form">
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.content} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
