import React, { Component } from 'react'
import { Form, Button, TextArea, Label, List } from 'semantic-ui-react'
import OpinionForm from './OpinionForm'
import OpinionList from './OpinionList'

export default class OutcomeForm extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
      showOpinionForm: false,
      disabled: false,
      editable: false,
      pros: [],
      cons: [],
      noOfPros: 0,
      noOfCons: 0 // move these to opinion list
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

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      showOpinionForm: !this.state.showOpinionForm,
      disabled: !this.state.disabled,
      editable: !this.state.editable
    })
    this.props.createOutcome(this.state.content)
  }

  handleChange = (e) => {
    console.log(e.target.value)
    let content = e.target.value
    this.setState({ content })
  }


  // deletes outcome
  handleDelete = () => {
    this.props.deleteOutcome(this.state.content)
    this.setState({
      content: "",
      disabled: !this.state.disabled,
      editable: !this.state.editable
     })
  }

  // this.state.content = outcome content
  handleOpinionDelete = (opinionContent) => {
    console.log("outcome form delete", opinionContent, "state:", this.state)
    this.props.deleteOpinion(opinionContent)
    this.setState({

     })
  }

  //not recording new changes to content
  handleEdit(){
    let content = this.state.content
    this.setState({ disabled: !this.state.disabled }, () => {console.log(this.state.content)})
    this.props.editOutcome(content)
  }

  render (){
    return (
      <div className="outcomes">
        <h1><label>OUTCOMES</label></h1>
          <div className="pro-con-badges">
            <List link>
            <Label>
              <List.Item>Pros</List.Item>
              <Label.Detail>{this.state.noOfPros}</Label.Detail>
            </Label>
            <Label>
              <List.Item>Cons</List.Item>
              <Label.Detail>{this.state.noOfCons}</Label.Detail>
            </Label>
            </List>
          </div>
          <div className="outcome-form">
            <Form>
              <Form.Field>
                <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={150} autoHeight placeholder='Possible outcome...' type="text" value={this.state.content} onChange={this.handleChange}/>

                <Button icon='add' disabled={!this.state.content} onClick={this.handleAdd}/>
                <Button icon='delete' onClick={this.handleDelete} disabled={!this.state.content}/>
                <Button icon='edit' disabled={!this.state.content} onClick={this.handleEdit.bind(this)}/>
            </Form.Field>
          </Form>
        </div>
          {this.state.showOpinionForm && <OpinionForm incrementBadge={this.incrementBadge} addPro={this.addPro} addCon={this.addCon} pros={this.state.pros} cons={this.state.cons} createOpinion={this.props.createOpinion}/>}

          <div className="opinion-list">
          <OpinionList pros={this.state.pros} cons={this.state.cons} delete={this.handleOpinionDelete}/>
        </div>
      </div>
    )
  }
}

// validate for empty fields
