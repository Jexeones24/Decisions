import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import { Button, Item } from 'semantic-ui-react'


export default class DecisionContent extends Component {
  constructor() {
    super();

    this.state = {
      editFormVisible: false,
      decisionId: null
    }
  }


  handleDelete = () => {
    this.props.deleteDecision(this.props)
  }

  formVisible = () => {
    this.setState({
      editFormVisible: !this.state.editFormVisible,
      decisionId: this.props.decision.decision.id
      })
  }

  // for add outcome, can just send state
  getId = () => {
    let decisionId = this.props.decision.id
    this.props.getDecisionId(decisionId)
  }


  render(){
    // console.log("in decision content, decision:", this.props.decision.decision.content, "outcomes:", this.props.decision.outcomes[0].content, "opinions:", this.props.decision.opinions[0])
    //
    // debugger
    return (
      <div className="decision-display">
        <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src='/assets/images/wireframe/image.png' />

          <Item.Content verticalAlign='middle'>
            <Item.Header>Decision {this.props.decision.decision.id}</Item.Header>
            <Item.Description>{this.props.decision.decision.content}</Item.Description>
            {this.props.decision.outcomes.map((outcome, idx) => <Item.Description key={idx}>Outcome: {outcome.content}</Item.Description>)}

            {this.props.decision.opinions.map((opinion, idx) => <Item.Description key={idx}>{opinion.content}</Item.Description>)}

            <Item.Extra>
              <Button floated='right' onClick={this.formVisible.bind(this)}>
                Edit
              </Button>
              <Button floated='right' onClick={this.handleDelete.bind(this)}>
                Delete
              </Button>
              <Button floated='right' onClick={this.getId.bind(this)}>
                Add Outcome
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      {this.state.editFormVisible ? <div className="edit-form"><DecisionEditForm
        decisionId={this.state.decisionId} editDecision={this.props.editDecision} decision={this.props.decision} id={this.props.idx}/></div> : null}
      </div>
    )
  }
}
