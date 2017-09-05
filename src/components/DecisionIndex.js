import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

export default class DecisionIndex extends Component {
  constructor(){
    super();
  }

  handleClick = (e) => {
    console.log("clicked in decision index")
    this.props.showDecision(e)
  }

  render(){
    console.log("in decision index", this.props)
    return(
      <div className="decision-card-container">
        {this.props.decisions.map((decision, idx) => <DecisionCard decision={decision} key={idx} id={decision.id} handleClick={this.handleClick}/>) }
      </div>
    )
  }
}


const DecisionCard = ({decision, idx, handleClick, id}) => {
  return(
    <div className="decision-card" key={idx} id={id}>
      <Card>
        <h1><a onClick={handleClick.bind(this, id)}><Card.Content header={id} value={id}/></a></h1>
        <Card.Content description={decision.content} />
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Pending</Button>
            <Button basic color='red'>Resolved</Button>
          </div>
        </Card.Content>
        <Card.Content extra>
          <Icon name='comment outline' />
          Comments
        </Card.Content>
      </Card>
    </div>
  )
}
