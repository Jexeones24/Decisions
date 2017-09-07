import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import OpinionForm from '../Opinions/OpinionForm'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import OutcomeAdapter from '../../adapters/OutcomeAdapter'
import { Grid, Segment, Form, TextArea, Button, Statistic, Header, Icon } from 'semantic-ui-react'


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
      opinionFormVisible: false
    }
  }

  createOutcomeFromDecisionShow = (content, decisionId) => {
    debugger;
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
        this.setState({
        decisionObject
      }, () => {console.log("decisionObj:", this.state.decisionObject)})
    })
  }

  // componentWillReceiveProps(nextProps){
  //
  // }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  //need content to update on page
  submitEdit = (e) => {
    this.props.editDecision(this.state.content, this.props.decisionId)
    this.setState({ editing: !this.state.editing })
  }


  showEditForm = (e) => {
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

  showOpinionForm = (e) => {
    // how do i get outcome id
    debugger

    this.setState({
      opinionFormVisible: !this.state.opinionFormVisible
    })
  }

  mouseEnter = () => {
    this.setState({ isMouseIn: !this.state.isMouseIn });
  }

  mouseLeave = () => {
    this.setState({
      isMouseIn: !this.state.isMouseIn,
      editing: false
    });
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
                    YOUR DECISION
                    <Header.Subheader>
                      Click to edit
                    </Header.Subheader>
                  </Header.Content>
                </Header>
                <Segment className="decision-show-title" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>

                  {this.state.editing ?
                    <Form onSubmit={this.submitEdit.bind(this)}><TextArea placeholder={this.state.decisionObject.decision.content} value={this.state.content}
                    onChange={this.handleChange.bind(this)} required/><button type="submit" >+</button></Form> : <h3 onClick={this.showEditForm.bind(this)}>{this.state.decisionObject.decision.content}</h3>}
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
                  <OutcomeForm createOutcome={this.createOutcomeFromDecisionShow} decisionId={this.props.decisionId}/> :
                  null}

                {this.state.decisionObject.outcomes ? this.state.decisionObject.outcomes.map((o, idx) => <Segment className="outcome" key={idx} onClick={this.showOpinionForm.bind(this)}>
                  <Statistic color='green' size='mini' value={idx+1} />
                  <h4>{o.content}</h4></Segment>) : <Segment className="outcome" onClick={this.handleAddOutcome.bind(this)}>Add outcome</Segment>}
              </Grid.Column>
              {/* on hover of outcome, opinion form should appear */}

              {this.state.opinionFormVisible ? <OpinionForm createOpinion={this.props.createOpinion}/> : null }
              {/* <Grid.Column>
                <button>+</button>
                {this.props.opinions.length ?
                this.props.opinions.map((o, idx) => <Segment className="opinion" key={idx}>{o.content}</Segment>) : <Segment className="opinion">Add opinion</Segment>}
              </Grid.Column> */}
            </Grid.Row>
          </Grid>

          {/* {this.state.outcomeFormVisible ? <OutcomeForm createOutcome={this.props.createOutcome} decisionObject={this.state.decisionObject}/> : null} */}
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
