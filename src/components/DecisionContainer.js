import React, { Component } from 'react'
import DecisionList from './DecisionList'

export default class DecisionContainer extends Component {
  constructor() {
    super();

    this.state = {
      decision: "",
      outcomes: [],
      pros: [],
      cons: []
    }
    // or nested object? which is easiest to manage?

    // {
    //   decision: {
    //     content: "",
    //     outcomes: [
    //       content: "",
    //       pros: [],
    //       cons: []
    //     ]
    //   }
    // }
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
