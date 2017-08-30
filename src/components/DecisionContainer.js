import React, { Component } from 'react'
import DecisionList from './DecisionList'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    this.state = {
      decision: ""
    }
  }

  getDecision = (decision) => {
    this.setState({ decision }, () => { console.log(this.state.decision) })
    // post request to save decision
    // decision form disappears, form input becomes text box
      // possible outcomes form appears
  }

  render(){
    return (
      <div className="decision-container">
        <DecisionList getDecision={this.getDecision} />
      </div>
    )
  }
}

// else show results page
