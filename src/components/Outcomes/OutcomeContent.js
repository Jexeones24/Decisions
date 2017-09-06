import React, { Component } from 'react'
import OutcomeEditForm from './OutcomeEditForm'
import { Button, Item } from 'semantic-ui-react'


export default class OutcomeContent extends Component {
  constructor() {
    super();

    this.state = {
      editFormVisible: false
    }
  }

  handleDelete = () => {
    this.props.deleteOutcome(this.props)


  }

  formVisible = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }

  getId = () => {
    let outcomeId = this.props.outcome.id
    this.props.getOutcomeId(outcomeId)
  }

  render(){
    return (
      <div className="outcome-display">
        <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src='/assets/images/wireframe/image.png' />

          <Item.Content verticalAlign='middle'>
            <Item.Header>Outcome {this.props.id}</Item.Header>
            <Item.Description>{this.props.outcome.content}</Item.Description>
            <Item.Extra>
              <Button floated='right' onClick={this.formVisible}>
                Edit
              </Button>
              <Button floated='right' onClick={this.handleDelete}>
                Delete
              </Button>
              <Button floated='right' onClick={this.getId.bind(this)}>
                Add Risk
              </Button>
              <Button floated='right' onClick={this.getId.bind(this)}>
                Add Reward
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      {this.state.editFormVisible ? <div className="edit-form"><OutcomeEditForm editOutcome={this.props.editOutcome} outcome={this.props.outcome} id={this.props.idx}/></div> : null}
      </div>
    )
  }
}
