import React, { Component } from 'react'

// needs to have state 
const DecisionShow = ({decision}) => {
  debugger
  let content = decision.decision.content
  let id = decision.decision.id
  let outcomes = decision.outcomes
  let opinions = decision.opinions[0]
  return (
    <div className="decision-show">
      <h1>{content}</h1>
      <h4>ID: {id}</h4>
      {outcomes.map((outcome, idx) => <h3 key={idx}> Outcome #{outcome.id}: {outcome.content}</h3>)}
      {opinions.map((opinion, idx) => <h5 key={idx}>Opinion #{opinion.id}: {opinion.content}</h5>)}
    </div>
  )
}

export default DecisionShow
