import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default class DecisionShow extends Component {
  constructor(){
    super();
  }

  handleClick = (e) => {
    console.log("click", this.props)
  }

  render(){
    return(
      <div className="decision-cards">
        {this.props.decisions.map((decision, idx) => <DecisionCard decision={decision} key={idx} id={decision.id} handleClick={this.handleClick.bind(this)}/>) }
      </div>
    )
  }
}


const DecisionCard = ({decision, idx, handleClick, id}) => {
  return(
    <div className="decision-card" key={idx} id={id}>
      <Card>
        <h1><a onClick={handleClick}><Card.Content header='Decision' /></a></h1>
        <Card.Content description={decision.content} />
        <Card.Content extra>
          <Icon name='user' />
          4 Friends
        </Card.Content>
      </Card>
    </div>
  )
}
