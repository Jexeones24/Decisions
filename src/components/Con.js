import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default class Con extends Component {
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

  handleClick = (e) => {
    e.preventDefault();
    this.props.addCon(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div className="con-item">
        <Input type="text" placeholder='Con...' onChange={this.handleChange} value={this.state.text}/>
        <Button basic color='black' onClick={this.handleClick}>ADD</Button>
      </div>
    )
  }
}
