import React, { Component } from 'react'
import { Form, Button, TextArea, Label, List } from 'semantic-ui-react'
import PCForm from './PCForm'
import OpinionList from './OpinionList'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      showPCForm: false,
      content: "",
      disabled: false,
      buttonVisibility: true,
      pros: [],
      cons: [],
      noOfPros: 0,
      noOfCons: 0,
      showPros: false,
      showCons: false
    }
  }

  addPro = (pro, flag) => {
    var flag = "pro"
    this.setState({ pros: [...this.state.pros, pro] }, () => {
      console.log("in add pro", this.state.pros)
      this.incrementBadge(pro, flag)
    })
  }


  addCon = (con, flag) => {
    var flag = "con"
    this.setState({ cons: [...this.state.cons, con] }, () => {
      console.log("in add con", this.state.cons)
      this.incrementBadge(con, flag)
    })
  }

  incrementBadge = (opinion, flag) => {
    (flag === "pro") ?
    this.setState({ noOfPros: this.state.noOfPros + 1}) :
    this.setState({ noOfCons: this.state.noOfCons + 1})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showPCForm: !this.state.showProConForm ,
      disabled: !this.state.disabled,
      buttonVisibility: !this.state.buttonVisibility,
    })
  }

  handleChange = (e) => {
    let content = e.target.value
    this.setState({ content })
  }

  handleClick = () => {
    // display
  }

  render (){
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
            <h1><label>POSSIBLE OUTCOME</label></h1>
            <List link>
            <h4>STATS</h4>
            <Label>
              <List.Item as='a' onClick={this.handleClick}>Pros</List.Item>
              <Label.Detail>{this.state.noOfPros}</Label.Detail>
            </Label>
            <Label>
              <List.Item as='a' onClick={this.handleClick}>Cons</List.Item>
              <Label.Detail>{this.state.noOfCons}</Label.Detail>
            </Label>
            </List>
            <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={150} autoHeight placeholder='Possible outcomes...' type="text" onChange={this.handleChange}/> <i className="pencil"></i>
            {this.state.buttonVisibility && <Button icon='add' />}
          </Form.Field>
        </Form>
        {this.state.showPCForm && <PCForm incrementBadge={this.incrementBadge} addPro={this.addPro} addCon={this.addCon} pros={this.state.pros} cons={this.state.cons}/>}
        <div className="opinion-list">
          <OpinionList pros={this.state.pros} cons={this.state.cons}/>
        </div>
      </div>
    )
  }
}

// DISPLAY PROS AND CONS
// validate for empty fields
// hide pro con before adding pros and cons
