import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="login-form">
        <form action="" onSubmit={this.handleSubmit}>
          <h1>LOGIN</h1>
          Username<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password<input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
