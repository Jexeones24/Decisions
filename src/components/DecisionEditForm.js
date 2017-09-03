import React, { Component } from 'react'

export default class DecisionEditForm extends Component {
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
    let id = this.props.id
    e.preventDefault();
    this.props.editDecision(content, id)
  }

  render() {
    return (
      <div className="decision-edit-form">
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.content} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
