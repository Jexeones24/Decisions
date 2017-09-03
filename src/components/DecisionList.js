import React, { Component } from 'react'
import { Form, Button, TextArea } from 'semantic-ui-react'
import OutcomeForm from './OutcomeForm'

export default class DecisionList extends Component {
  constructor(){
    super();

    this.state = {
      content: "",
      formVisible: false,
      disabled: false,
      editable: false
    }
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
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
    this.setState({
      content: "",
      disabled: !this.state.disabled,
      editable: !this.state.editable
   })
  }

  // button doesn't toggle
  handleEdit = () => {
    let content = this.state.content
    this.setState({ disabled: !this.state.disabled }, () => { console.log("disabled:", this.state.disabled, "content:", this.state.content)})
    this.props.editDecision(content)
  }



  showForm = () => {
    this.setState({formVisible: !this.state.formVisible})
  }

  render() {

    return (
      <div>
        <Form>
          <Form.Field>
            <h1><label>WHAT'S THE DECISION?</label></h1>
            <div className="decision-bar">
              <TextArea disabled={(this.state.disabled) ? "disabled" : ""} maxLength={200} autoHeight placeholder='Should I...' type="text" value={this.state.content} onChange={this.handleChange}/>
              <Button icon='add' disabled={!this.state.content} onClick={this.handleAdd}/>
              <Button icon='delete' disabled={!this.state.content} onClick={this.handleDelete}/>
              <Button disabled={!this.state.content} icon='edit' onClick={this.handleEdit}/>
              <Button icon onClick={this.showForm} disabled={!this.state.content} value="new-outcome">
                + new outcome
              </Button>
            </div>
          </Form.Field>
        </Form>
          {this.state.formVisible ? <div className="outcome-form"><OutcomeForm createOutcome={this.props.createOutcome} createOpinions={this.props.createOpinions}
          deleteOutcome={this.props.deleteOutcome}
          editOutcome={this.props.editOutcome}/></div> : null }
      </div>
    )
  }
}



// limit characters
// make sure it's real content
