import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import { Button, Image, Item } from 'semantic-ui-react'


export default class DecisionContent extends Component {
  constructor() {
    super();

    this.state = {
      editFormVisible: false
    }
  }

  handleDelete = () => {
    this.props.deleteDecision(this.props)
  }

  formVisible = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }

  getId = () => {
    let decisionId = this.props.decision.id
    this.props.getDecisionId(decisionId)
  }

  render(){
    return (
      <div className="decision-display">
        <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src='/assets/images/wireframe/image.png' />

          <Item.Content verticalAlign='middle'>
            <Item.Header>Decision {this.props.id}</Item.Header>
            <Item.Description>{this.props.decision.content}</Item.Description>
            <Item.Extra>
              <Button floated='right' onClick={this.formVisible}>
                Edit
              </Button>
              <Button floated='right' onClick={this.handleDelete}>
                Delete
              </Button>
              <Button floated='right' onClick={this.getId.bind(this)}>
                Add Outcome
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      {this.state.editFormVisible ? <div className="edit-form"><DecisionEditForm editDecision={this.props.editDecision} decision={this.props.decision} id={this.props.idx}/></div> : null}
      </div>
    )
  }
}
