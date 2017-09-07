import React, { Component } from 'react'
import DecisionEditForm from './DecisionEditForm'
import OutcomeForm from '../Outcomes/OutcomeForm'
import DecisionAdapter from '../../adapters/DecisionAdapter'
import { Grid, Segment, Form, TextArea, Button } from 'semantic-ui-react'


export default class DecisionShow extends Component {
  constructor(){
    super();

    this.state = {
      decisionObject: {
        outcomes:[],
        opinions:[],
      },
      content: '',
      isMouseIn: false,
      editing: false,
      outcomeFormVisible: false,
      opinionFormVisible: false
    }
  }

  componentDidMount(){
    DecisionAdapter.showDecision(this.props.decisionId)
      .then( decisionObject => {
        this.setState({
        decisionObject
      }, () => {console.log("decisionObj:", this.state.decisionObject)})
    })
  }

  componentWillReceiveProps(nextProps){
    let outcomes = [...this.state.decisionObject.outcomes]
    let newOutcome = nextProps.outcomes[0]
    let newOutcomes = [...outcomes, newOutcome]
    console.log("outcomes array", outcomes, "nextProps", newOutcome, "newOutcomes", newOutcomes)
    // if(this.state.decisionObject.outcomes !== nextProps.outcomes){

  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  submitEdit = (e) => {
    this.props.editDecision(this.state.content, this.props.decisionId)
    this.setState({ editing: !this.state.editing })
    //need content to update on page
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

  showOpinionForm = () => {
    console.log("showing opinion form")
    this.setState({ opinionFormVisible: !this.state.opinionFormVisible })
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
                <Segment className="decision-show-title" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>

                  {this.state.editing ?
                    <Form onSubmit={this.submitEdit.bind(this)}><TextArea placeholder={this.state.decisionObject.decision.content} value={this.state.content}
                    onChange={this.handleChange.bind(this)} required/><button type="submit" >+</button></Form> : <h3 onClick={this.showEditForm.bind(this)}>{this.state.decisionObject.decision.content}</h3>}

                </Segment>
              </Grid.Column>

              <Grid.Column>
                <button onClick={this.showOutcomeForm}>+</button>

                {this.state.outcomeFormVisible ?
                  <OutcomeForm createOutcome={this.props.createOutcome} decisionId={this.props.decisionId}/> :
                  null}

                {this.state.decisionObject.outcomes ? this.state.decisionObject.outcomes.map((o, idx) => <Segment className="outcome" key={idx} onClick={this.showOpinionForm}>{o.content}</Segment>) : <Segment className="outcome" onClick={this.handleAddOutcome.bind(this)}>Add outcome</Segment>}
              </Grid.Column>

              {/* on hover of outcome, opinion form should appear */}


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
