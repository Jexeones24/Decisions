import React, { Component } from 'react'

export default class OutcomeForm extends Component {
  constructor() {
    super();

  }

  render(){
    return (
      <div className="outcome-form">
        <form className="outcome-form-field">
          <input type="text" placeholder="Outcome"/>
        </form>
        <button name="submit">Submit</button>
      </div>
    )
  }
}
