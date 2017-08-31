import React, { Component } from 'react'
import DecisionList from './DecisionList'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    this.state = {
      decision: "",
      outcome: { content: "", pros: [{items: ""}], cons: [{items: ""}]}
    }
    // what's best way to store this shit in state? 
  }

  getDecision = (decision) => {
    this.setState({ decision }, () => { console.log(this.state.decision) })
    // save decision to state => make into text box
      // possible outcomes form appears, store in outcomes array

        // associate outcomes with decision id?
  }

  getOutcomes = () => {
    console.log("in get outcomes")
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
