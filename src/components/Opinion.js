import React, { Component } from 'react'
import OpinionForm from './OpinionForm'

export default class Opinion extends Component {
  constructor() {
    super();


  }

  render(){
    return (
      <div className="opinion">
        <h2>OPINION</h2>
        <div className="opinion-form">
          <OpinionForm/>
        </div>
        <div className="opinion-display">
          <OpinionDisplay />
        </div>
      </div>
    )
  }
}

const OpinionDisplay = () => {
  return(
    <div className="opinion-display-content">
      <p>Opinion Content</p>
    </div>
  )
}
