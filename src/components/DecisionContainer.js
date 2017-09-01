import React, { Component } from 'react'
import DecisionList from './DecisionList'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    this.state = {
      decision: "",
      outcomes: [],
      opinions: [],
    }
  }

  getDecision = (decision) => {
    this.setState({ decision }, () => { console.log(this.state.decision) })
  }

  // postDecision = () => {
  //   post to db
  // }

  render(){
    return (
      <div className="decision-container">
        <DecisionList getDecision={this.getDecision} />
      </div>
    )
  }
}
