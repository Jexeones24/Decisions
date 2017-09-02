import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import OutcomeForm from './OutcomeForm'

export default class DecisionList extends Component {
  constructor(){
    super();

    this.state = {
      content: "",
      showOutcomeForm: false,
      disabled: false,
      editable: false
    }
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      showOutcomeForm: !this.state.showOutcomeForm,
      editable: !this.state.editable,
      disabled: !this.state.disabled
    })
    this.props.createDecision(this.state.content)
  }


  handleChange = (e) => {
    console.log(e.target.value)
    let content = e.target.value
    this.setState({ content })
  }


  handleDelete = () => {
    this.props.deleteDecision()
    this.setState({ content: "" }, () => {
      console.log(this.state.content)}
    )
    // clear input field
  }

  // button doesn't toggle
  handleEdit = () => {
    let content = this.state.content
    this.setState({ disabled: !this.state.disabled }, () => { console.log("disabled:", this.state.disabled, "content:", this.state.content)})
    this.props.editDecision(content)
  }

  render() {
    var decision = this.state.editable ? <TextArea disabled="" maxLength={200} autoHeight defaultValue='Should I...' type="text" onChange={this.handleChange}/> : <h3>{this.state.content}</h3>

    return (
      <div>
        <Form>
          <Form.Field>
            <h1><label>WHAT'S YOUR LIFE'S STRIFE?</label></h1>
              <div className="decision-bar">
                <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={200} autoHeight placeholder='Should I...' type="text" value={this.state.content} onChange={this.handleChange}/>
                {(this.state.editable === false) ? <Button icon='add' onClick={this.handleAdd}/>
                : <div className="edit-delete-buttons"><Button icon='delete' onClick={this.handleDelete}/><Button toggle active={!this.state.editable} icon='edit' onClick={this.handleEdit}/></div>}
            </div>
          </Form.Field>
        </Form>
        {this.state.showOutcomeForm && <OutcomeForm createOutcome={this.props.createOutcome} createOpinions={this.props.createOpinions}/>}
      </div>
    )
  }
}








// limit characters
// make sure it's real content
// only allow + click and form to appear if content is in box
  // want button to disappear
  // want content to be condensed and centered
