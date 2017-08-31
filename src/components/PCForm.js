import React, { Component } from 'react'
import { Form, Button, Icon, Input, Grid } from 'semantic-ui-react'
import Pro from './Pro'
import Con from './Con'

export default class PCForm extends Component {
  constructor() {
    super();

    this.state = {
      showProForm: false,
      showConForm: false,
      pros: [],
      cons: []
    }
  }

  handleProClick = () => {
    this.setState({ pros: [this.state.pros]})
  }

  handleConClick = () => {
    this.setState({ cons: [this.state.cons]})
  }

  addPro = (pro) => {
    console.log("in add pro")
    this.setState({ pros: [...this.state.pros, pro] }, () => {
      console.log("in add pro", this.state.pros)
    })
    // this.props.getOpinions(pros, cons)
  }

  addCon = (con) => {
    this.setState({ cons: [...this.state.cons, con] }, () => {
      console.log("in add con", this.state.cons)
    })
  }

  handleProClick = (e) => {
    this.setState({ showProForm: !this.state.showProForm })
  }

  handleConClick = (e) => {
    this.setState({ showConForm: !this.state.showConForm })
  }

  render() {
    return (
      <div className="pro-con-form">
        <h4>PRO | CON</h4>
        <Button icon onClick={this.handleProClick}>
          <Icon name='like outline' value="pro"/>
        </Button>
        <Button icon onClick={this.handleConClick}>
          <Icon name='dislike outline' value="con"/>
        </Button>
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.state.showProForm && <Pro pros={this.state.pros} handlePro={this.handlePro} addPro={this.addPro}/>}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.showConForm && <Con cons={this.state.cons} handleCon={this.handleCon} addCon={this.addCon}/>}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


// change the form field based on click of pro or con
//check to make sure field is not empty before submitting
// dynamically generate these and number them using index + 1
  // once submit, they become a badge
    // click on badge to see pros/cons -> badge counts how many of each
// add icons to forms -> add, edit, delete
