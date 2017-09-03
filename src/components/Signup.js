import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state)
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Sign-up
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked secondary  segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="email"></i>
                  <input type="text" name="email" placeholder="Email" onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="ui fluid large black submit button" onSubmit={this.handleSubmit}>Sigup</div>
            </div>

            <div className="ui error message"></div>

          </form>
        </div>
      </div>
    )
  }
}
