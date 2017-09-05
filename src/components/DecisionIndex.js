import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

export default class DecisionIndex extends Component {
  constructor(){
    super();

  }

  handleClick = (e) => {
    this.props.showDecision(e)
  }

  render(){
    return(
      <div>
        {this.props.decisions.map((decision, idx) =>
          <div className="decision-card-container" key={idx}>
          <Card><h1><a onClick={this.handleClick.bind(this, decision)}><Card.Content header={decision.id} value={decision.id}/></a></h1>
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
          </Card></div>) }
      </div>
    )
  }
}
