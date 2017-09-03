import React, { Component } from 'react'

export default class OpinionForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      value: null
    }
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  handleClick = (e) => {
    (e.target.name === 'risk') ? this.setState({value: false}) :
    this.setState({ value: true })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let outcomeId = this.props.outcomeId
    let content = this.state.content
    let value = this.state.value
    this.props.createOpinion(content, outcomeId, value)
  }

  render(){
    return (
      <div className="opinion-form">
        <form className="opinion-form-field" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Opinion" onChange={this.handleChange} value={this.state.content}/>
          <button name="risk" onClick={this.handleClick.bind(this)}>Risk</button>
          <button name="reward" onClick={this.handleClick.bind(this)}>Reward</button>
          <button name="submit">Submit</button>
        </form>
      </div>
    )
  }
}
