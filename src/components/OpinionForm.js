import React, { Component } from 'react'

export default class OpinionForm extends Component {
  constructor() {
    super();

  }

  render(){
    return (
      <div className="opinion-form">
        <form className="opinion-form-field">
          <input type="text" placeholder="Opinion"/>
        </form>
        <button name="submit">Submit</button>
      </div>
    )
  }
}
