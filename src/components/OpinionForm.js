import React, { Component } from 'react'

export default class OpinionForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createOpinion(this.state)
  }

  render(){
    return (
      <div className="opinion-form">
        <form className="opinion-form-field" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Opinion"/>
        </form>
        <button name="submit">Submit</button>
      </div>
    )
  }
}
