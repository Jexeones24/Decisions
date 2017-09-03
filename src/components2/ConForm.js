import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default class ConForm extends Component {
  constructor(){
    super();

    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    let text = e.target.value
    this.setState({ text })
  }

  handleClick = () => {
    let value = false
    this.props.addCon(this.state.text)
    this.setState({ text: "" })
    this.props.createOpinion(this.state.text, value)
  }

  render() {
    return (
      <div className="con-item">
        <Input type="text" placeholder='Risk...' onChange={this.handleChange} value={this.state.text}/>
        <Button basic color='black' onClick={this.handleClick}>+</Button>
      </div>
    )
  }
}
