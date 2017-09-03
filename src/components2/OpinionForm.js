import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import ProForm from './ProForm'
import ConForm from './ConForm'

export default class OpinionForm extends Component {
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
        <div className="risk-reward-buttons">
          <Button icon onClick={this.handleClick} value="pro">
            + reward
          </Button>
          <Button icon onClick={this.handleClick} value="con">
            + risk
          </Button>
        </div>
        <div className="opinion-form-grid">
          <Grid>
            <Grid.Row>
            <Grid.Column width={8}>
              {this.state.showProForm && <ProForm pros={this.props.pros} addPro={this.handleAddPro} createOpinion={this.props.createOpinion}/>}
            </Grid.Column>
            <Grid.Column width={8}>
              {this.state.showConForm && <ConForm cons={this.props.cons}  addCon={this.handleAddCon} createOpinion={this.props.createOpinion}/>}
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
