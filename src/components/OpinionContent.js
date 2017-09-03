import React, { Component } from 'react'
import OpinionEditForm from './OpinionEditForm'


export default class OpinionDisplay extends Component {
  constructor(){
    super();

    this.state = {
      editFormVisible: false
    }
  }

  handleDelete = () => {
    this.props.deleteOpinion(this.props)
  }

  render(){
    return(
      <div className="opinion-display-content">
        <h3>{this.props.opinion.content}
          <button onClick={this.handleDelete.bind(this)}>-</button>
          <button onClick={this.formVisible}>edit</button>
          {this.state.editFormVisible ? <div className="edit-form"><OpinionEditForm editOpinion={this.props.editOpinion} opinion={this.props.opinion} id={this.props.idx}/></div> : null}
        </h3>
      </div>
    )
  }
}
