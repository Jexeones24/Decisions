import React, { Component } from 'react'
import OutcomeForm from './OutcomeForm'

export default class Outcome extends Component {
  constructor() {
    super();


  }

  render(){
    return (
      <div className="outcome">
        <h2>OUTCOME</h2>
        <div className="outcome-form">
          <OutcomeForm/>
        </div>
        <div className="outcome-display">
          <OutcomeDisplay />
        </div>
      </div>
    )
  }
}

const OutcomeDisplay = () => {
  return(
    <div className="outcome-display-content">
      <p>Outcome Content</p>
    </div>
  )
}
