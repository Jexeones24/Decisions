import React, { Component } from 'react'
import { Card, Icon, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class DecisionIndex extends Component {
  constructor(){
    super();
  }

  render(){
    return(

      <div>
        <Header size='huge'>ALL DECISIONS </Header>
        {this.props.decisions.map((decision, idx) =>
          <div className="decision-card-container" key={idx}>
          <Card>
            <h1><a href={'/decisions/' + decision.id}><Card.Content header={decision.id} value={decision.id}/></a></h1>
            <Card.Content as='h1' description={decision.content.toUpperCase()} />
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
