import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import OpinionContainer from '../Opinions/OpinionContainer'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import OutcomeAdapter from '../../adapters/OutcomeAdapter'
import { Grid, Segment, Form, Comment, TextArea, Button, Statistic, Header, Icon } from 'semantic-ui-react'


export default class DecisionShow extends Component {
  constructor(){
    super();

    this.state = {

      decisionObject: {
        outcomes:[],
        opinions:[],
      },

      content: '',
      outcomeId: null,
      isMouseIn: false,
      editing: false,
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

  //need content to update on page
  submitEdit = (e) => {
    this.props.editDecision(this.state.content, this.props.decisionId)
    this.setState({ editing: !this.state.editing })
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

  showOutcomeEditForm = () => {
    console.log("in outcome edit form")
  }

  handleOutcomeDelete = () => {
    console.log("handling outcome delete")
  }


  showOpinionForm = (e) => {
    this.setState({
      opinionFormVisible: !this.state.opinionFormVisible,
      outcomeId: e
    })
  }


  // mouseEnterOutcome = () => {
  //   console.log("wtf")
  //   this.setState({ showValuePrompt: !this.state.showValuePrompt })
  // }
  //
  // mouseLeaveOutcome = () => {
  //   console.log('hahahah')
  //   this.setState({ showValuePrompt: !this.state.showValuePrompt })
  // }

  // on hover of outcome box, propmt user to add either risk or reward, send value to opinion form

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
                    YOUR DECISION
                    <Header.Subheader>
                      Click to edit
                    </Header.Subheader>
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
                    <Header.Subheader>
                      Click outcome to add risk or reward
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <button onClick={this.showOutcomeForm}>add new</button>


                {this.state.outcomeFormVisible ?
                  <OutcomeForm
                    createOutcome={this.createOutcomeFromDecisionShow} decisionId={this.props.decisionId}/> :
                    null}

                    {this.state.decisionObject.outcomes ? this.state.decisionObject.outcomes.map((o, idx) => <Segment className="outcome" key={idx} data-id={o.id} onMouseEnter={this.mouseEnterOutcome} onMouseLeave={this.mouseLeaveOutcome} onClick={this.showOpinionForm.bind(this, o.id)}>
                    <Statistic color='green' size='mini' value={idx+1} />
                    <h4>{o.content}</h4>
                    <button onClick={this.handleOutcomeDelete}>-</button>
                    <button>opinion</button>
                    </Segment>) : <Segment className="outcome" onClick={this.handleAddOutcome.bind(this)}>Add outcome</Segment>}
              </Grid.Column>

              <Grid.Column>
                <Header as='h2'>
                  <Icon name='plus'/>
                  <Header.Content centered>
                    Pros & Cons
                    <Header.Subheader>
                      <Comment.Group>
                        <Comment>
                      <Comment.Actions>
                        <Comment.Action>PRO</Comment.Action>
                        <Comment.Action>CON</Comment.Action>
                      </Comment.Actions>
                    </Comment>
                  </Comment.Group>
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                {this.state.opinionFormVisible ? <OpinionContainer
                outcomeId={this.state.outcomeId} createOpinion={this.props.createOpinion}/> : null }

                {/* <button>+</button>
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
