import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class DecisionShow extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="decision-cards">
        {this.props.decisions.map((decision, idx) => <DecisionCard decision={decision} key={idx}/>) }
      </div>
    )
  }
}

const DecisionCard = ({decision, idx}) => {
  return(
    <div className="decision-card" key={idx}>
      <Card>
        <Card.Content header='Decision' />
        <Card.Content description={decision.content} />
        <Card.Content extra>
          <Icon name='user' />
          4 Friends
        </Card.Content>
      </Card>
    </div>
  )
}
