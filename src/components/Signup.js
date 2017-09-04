import React, { Component } from 'react'

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({ [property]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state)
  }

  render () {
    return (
      <div className="signup-form">
        <form action="" onSubmit={this.handleSubmit}>
          <h1>SIGNUP</h1>
          Username<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Email<input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
          Password<input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
