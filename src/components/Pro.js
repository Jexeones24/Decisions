import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default class Pro extends Component {
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
    let value = true
    this.props.addPro(this.state.text)
    this.setState({ text: "" })
    this.props.createOpinions(this.state.text, value)
  }

  render() {
    return (
      <div className="con-item">
        <Input type="text" placeholder='Pro...' onChange={this.handleChange} value={this.state.text} />
        <Button basic color='black' onClick={this.handleClick}>ADD</Button>
      </div>
    )
  }
}
