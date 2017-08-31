import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import Pro from './Pro'
import Con from './Con'

export default class PCForm extends Component {
  constructor() {
    super();

    this.state = {
      showProForm: false,
      showConForm: false,
    }
  }

  handleProClick = (e) => {
    this.setState({ showProForm: !this.state.showProForm })
  }

  handleConClick = (e) => {
    this.setState({ showConForm: !this.state.showConForm })
  }

  handleNewOutcome = () => {
    console.log("handle new outcome form")
    // tell DecisionList to render another Outcome Form
  }

  handleSaveClick = () => {
    console.log("In save")
  }

  render() {
    return (
      <div className="pro-con-form">
        <Button icon onClick={this.handleProClick}>
          + pro
        </Button>
        <Button icon onClick={this.handleConClick}>
          + con
        </Button>
        <Button icon onClick={this.handleSaveClick}>
          SAVE
        </Button>
        <Button icon onClick={this.handleNewOutcome}>
          + new outcome
          {/* render OutcomeForm */}
        </Button>
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.state.showProForm && <Pro pros={this.props.pros} addPro={this.props.addPro}/>}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.showConForm && <Con cons={this.props.cons}  addCon={this.props.addCon}/>}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

// on click show buttons and grid or OutcomeForm

//check to make sure field is not empty before submitting
// click on badge to see pros/cons -> badge counts how many of each
// add icons to forms -> add, edit, delete
