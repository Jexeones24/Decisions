import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import OutcomeEditForm from '../Outcomes/OutcomeEditForm'
import OpinionContainer from '../Opinions/OpinionContainer'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import OutcomeAdapter from '../../adapters/OutcomeAdapter'
import { Grid, Segment, Form, TextArea, Button, Statistic, Header, Icon } from 'semantic-ui-react'


export default class DecisionShow extends Component {
  constructor(){
    super();

    this.state = {

      decisionObject: {
        content: '',
        outcomes:[],
        opinions:[],
      },

      content: '',
      outcomeId: null,
      opinionValue: '',
      isMouseIn: false,
      editing: false,
      outcomeEditing: false,
      outcomeFormVisible: false,
      opinionFormVisible: false,
      showValuePrompt: false
    }
  }

  createOutcomeFromDecisionShow = (content, decisionId) => {
    OutcomeAdapter.createOutcome(content, decisionId)
      .then( outcome => {
        let newDecisionObject = Object.assign({},this.state.decisionObject)

        let newOutcomes = [...newDecisionObject.outcomes, outcome]
        newDecisionObject.outcomes = newOutcomes
        this.setState({ decisionObject:newDecisionObject })
      }
    )
  }


  // updating, but not re-rendering
  submitEdit = (content, decisionId) => {
    DecisionAdapter.editDecision(this.state.content, this.props.decisionId)
      .then( decision => {
        let newDecisionObject = Object.assign({},this.state.decisionObject)
        newDecisionObject.decision = decision
        this.setState({ decisionObject:newDecisionObject }, () => {console.log(this.state.decisionObject)})
      }
    )
  }


  componentDidMount(){
    DecisionAdapter.showDecision(this.props.decisionId)
      .then( decisionObject => {
        this.setState({ decisionObject })
    })
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }


  showDecisionEdit = (e) => {
    console.log("showing form")
      this.setState({ editing: !this.state.editing })
  }

  // redirect does not render new content
  handleDelete = (e) => {
    this.props.deleteDecision(this.props.decisionId)
    this.props.history.goBack()
  }

  showOutcomeForm = () => {
    this.setState({ outcomeFormVisible: !this.state.outcomeFormVisible })
  }

  handleOutcomeEdit = () => {
    console.log("in outcome edit form")
    // replace outcome content with edit form

  }

  handleOutcomeDelete = () => {
    console.log("handling outcome delete")
  }


  showOpinionForm = (e, value) => {
    console.log(e, value)
    this.setState({
      opinionFormVisible: !this.state.opinionFormVisible,
      outcomeId: e,
      opinionValue: value
    })
  }

  render(){
    let decisionHTML = () => {
      return (
        <div>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Header as='h2'>
                  <Icon/>
                  <Header.Content>
                    CURRENT DECISION
                  </Header.Content>
                </Header>
                <Segment className="decision-show-title">

                  {this.state.editing ?
                    <Form onSubmit={this.submitEdit.bind(this)}><TextArea placeholder={this.state.decisionObject.decision.content} value={this.state.content}
                    onChange={this.handleChange.bind(this)} required/><button type="submit">+</button></Form> : <h3 onClick={this.showDecisionEdit.bind(this)}>{this.state.decisionObject.decision.content}</h3>}
                    <button onClick={this.handleDelete}>-</button>
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Header as='h2'>
                  <Icon name='balance' />
                  <Header.Content>
                    POSSIBLE OUTCOMES
                    <Header.Subheader onClick={this.showOutcomeForm}>
                      Add New Outcome
                    </Header.Subheader>
                  </Header.Content>
                </Header>

                <OutcomeEditForm />


                {this.state.outcomeFormVisible ?
                  <OutcomeForm
                    createOutcome={this.createOutcomeFromDecisionShow} decisionId={this.props.decisionId}/> :
                    null}

                    {this.state.decisionObject.outcomes ? this.state.decisionObject.outcomes.map((o, idx) => <Segment className="outcome" key={idx} data-id={o.id}  onClick={this.handleOutcomeEdit}>
                    <Statistic color='green' size='mini' value={idx+1} />
                    <h4>{o.content}</h4>
                    <button data-id={o.id} onClick={this.handleOutcomeDelete.bind(this, o.id)}>-</button>
                    <button data-id={o.id} onClick={this.showOpinionForm.bind(this, o.id, true)} value="true">pro</button>
                    <button onClick={this.showOpinionForm.bind(this, o.id, false)} value="false">con</button>
                    </Segment>) : <Segment className="outcome">Add outcome</Segment>}
              </Grid.Column>

              <Grid.Column>
                <Header as='h2'>
                  <Icon name='plus'/>
                  <Header.Content>
                    Pros & Cons
                  </Header.Content>
                </Header>

                {this.state.opinionFormVisible ? <OpinionContainer
                opinionValue={this.state.opinionValue}
                outcomeId={this.state.outcomeId} createOpinion={this.props.createOpinion}/> : null }

                {/*
                {this.props.opinions.length ?
                this.props.opinions.map((o, idx) => <Segment className="opinion" key={idx}>{o.content}</Segment>) : <Segment className="opinion">Add opinion</Segment>} */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }

    return (
      <div className="decision-show">
        {this.state.decisionObject.decision ? decisionHTML() : []}
      </div>
    )
  }
}
