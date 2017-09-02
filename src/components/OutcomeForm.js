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

  
  addPro = (pro, value) => {
    var value = true
    this.setState({ pros: [...this.state.pros, pro]}, () => {
      this.incrementBadge(pro, value)
    })
  }


  addCon = (con, value) => {
    var value = false
    this.setState({ cons: [...this.state.cons, con]}, () => {
      this.incrementBadge(con, value)
    })
  }

  incrementBadge = (opinion, value) => {
    (value === true) ?
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
    this.setState({ content: e.target.value })
  }

  handleClick = () => {
    this.props.createOutcome(this.state.content)
  }

  handleDelete = (e) => {
    console.log("in handle delete", e)
  }

  render (){
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <Form.Field>
            <h1><label>CHOICES</label></h1>
            <List link>
            <h4>STATS</h4>
            <Label>
              <List.Item as='a'>Pros</List.Item>
              <Label.Detail>{this.state.noOfPros}</Label.Detail>
            </Label>
            <Label>
              <List.Item as='a'>Cons</List.Item>
              <Label.Detail>{this.state.noOfCons}</Label.Detail>
            </Label>
            </List>
            <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={150} autoHeight placeholder='Possible outcomes...' type="text" onChange={this.handleChange}/>
            {this.state.buttonVisibility && <Button icon='add' onClick={this.handleClick} />}
          </Form.Field>
        </Form>
        {this.state.showPCForm && <PCForm incrementBadge={this.incrementBadge} addPro={this.addPro} addCon={this.addCon} pros={this.state.pros} cons={this.state.cons} createOpinions={this.props.createOpinions}/>}
        <div className="opinion-list">
        <OpinionList pros={this.state.pros} cons={this.state.cons} delete={this.handleDelete}/>
        </div>
      </div>
    )
  }
}

// DISPLAY PROS AND CONS
// validate for empty fields
// hide pro con before adding pros and cons
