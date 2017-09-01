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

  handlePro = (e) => {
    this.setState({ showProForm: !this.state.showProForm })
  }

  handleCon = (e) => {
    this.setState({ showConForm: !this.state.showConForm })
  }

  handleNewOutcome = () => {
    console.log("handle new outcome form")
    // tell DecisionList to render another Outcome Form
  }

  handleSave = () => {
    console.log("In save")
  }


  handleAddPro = (pro) => {
    this.props.addPro(pro)
    this.setState({ showProForm: !this.state.showProForm })
  }

  handleAddCon = (con) => {
    this.props.addCon(con)
    this.setState({ showConForm: !this.state.showConForm })
  }

  render() {
    return (
      <div className="pro-con-form">
        <Button icon onClick={this.handlePro}>
          + pro
        </Button>
        <Button icon onClick={this.handleCon}>
          + con
        </Button>
        <Button icon onClick={this.handleSave}>
          SAVE
        </Button>
        <Button icon onClick={this.handleNewOutcome}>
          + new outcome
          {/* render OutcomeForm */}
        </Button>
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.state.showProForm && <Pro pros={this.props.pros} addPro={this.handleAddPro}/>}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.showConForm && <Con cons={this.props.cons}  addCon={this.handleAddCon}/>}
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
