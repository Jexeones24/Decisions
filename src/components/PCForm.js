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


  handleClick = (e) => {
    let type = e.target.value
    if(type === "pro"){
      this.setState({ showProForm: !this.state.showProForm })
    } else if(type === "con"){
      this.setState({ showConForm: !this.state.showConForm })
    } else {
      console.log("new outcome")
    }
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
        <Button icon onClick={this.handleClick} value="pro">
          + reward
        </Button>
        <Button icon onClick={this.handleClick} value="con">
          + risk
        </Button>
        <Button icon onClick={this.handleClick} value="new-outcome">
          + new outcome
          {/* render OutcomeForm */}
        </Button>
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.state.showProForm && <Pro pros={this.props.pros} addPro={this.handleAddPro} createOpinions={this.props.createOpinions}/>}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.showConForm && <Con cons={this.props.cons}  addCon={this.handleAddCon} createOpinions={this.props.createOpinions}/>}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


//check to make sure field is not empty before submitting
// click on badge to see pros/cons -> badge counts how many of each
// add icons to forms -> add, edit, delete
