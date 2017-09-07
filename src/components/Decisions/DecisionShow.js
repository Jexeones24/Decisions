import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import { Grid, Menu, Segment, Button, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default class DecisionShow extends Component {
  constructor(){
    super();

    this.state = {
      decisionObject: {},
      decisions: [],
      outcomes: [],
      isMouseIn: false,
      editFormVisible: false,
      outcomeFormVisible: false
    }
  }

  componentDidMount(){
    DecisionAdapter.showDecision(this.props.decisionId)
      .then( decisionObject => { this.setState({
        decisionObject
      }, () => {console.log("decisions:", this.props.decisions, "outcomes:", this.props.outcomes, "opinions:", this.props.opinions)})
    })
  }

  componentWillReceiveProps(nextProps){

    let newObject = Object.assign({}, this.state.decisionObject);
    let newDecisions = nextProps.decisions
    let newOutcomes = nextProps.outcomes
    newObject.outcomes = newOutcomes;
    newObject.decisions = newDecisions
    this.setState({decisionObject: newObject}, () => {console.log(this.state.decisionObject)});

  }

  handleClick = () => console.log('clicking')

  handleEdit = (e) => {
    console.log("decision id:", this.props.decisionId)
      this.setState({
        editFormVisible: !this.state.editFormVisible
    }, () => {console.log(this.state)})
  }

  // redirect does not render new content
  handleDelete = (e) => {
    this.props.deleteDecision(this.props.decisionId)
    this.props.history.goBack()
  }

  handleAddOutcome = (e) => {
    this.setState({ outcomeFormVisible: !this.state.outcomeFormVisible })
  }

  mouseEnter = () => {
    this.setState({ isMouseIn: !this.state.isMouseIn });
  }
  mouseLeave = () => {
    this.setState({ isMouseIn: !this.state.isMouseIn});
  }

  render(){
    let decisionHTML = () => {
      return (
        <div>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment className="decision-show-title" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}><h3>{this.state.decisionObject.decision.content}</h3>{this.state.isMouseIn &&
                  <div>
                  <Button icon onClick={this.handleEdit.bind(this)}>
                    <Icon name='pencil' />
                  </Button>
                  <Button icon onClick={this.handleDelete.bind(this)}>
                    <Icon name='trash' />
                  </Button></div>}
                </Segment>
              </Grid.Column>

              <Grid.Column>
                {this.props.outcomes.length ? this.props.outcomes.map((o, idx) => <Segment className="outcome" key={idx}>{o.content}</Segment>) : <Segment className="outcome" onClick={this.handleAddOutcome.bind(this)}>Add outcome</Segment>}
              </Grid.Column>

              <Grid.Column>
                {this.props.opinions.length ?
                this.props.opinions.map((o, idx) => <Segment className="opinion" key={idx}>{o.content}</Segment>) : <Segment className="opinion">Add opinion</Segment>}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {this.state.editFormVisible ? <DecisionEditForm
          content={this.state.content}
          decisionId={this.state.decisionObject.decision.id} editDecision={this.props.editDecision} decision={this.props.decision}/> : null}

          {this.state.outcomeFormVisible ? <OutcomeForm createOutcome={this.props.createOutcome} decisionObject={this.state.decisionObject}/> : null}
        </div>
      )
    }

    return (
      <div className="decision-show">
        {this.state.decisionObject.decision ? decisionHTML() : 'empty'}
      </div>
    )
  }
}
