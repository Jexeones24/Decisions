import React, { Component } from 'react'
import OpinionForm from './OpinionForm'
import OpinionContent from './OpinionContent'


export default class Opinion extends Component {
  constructor() {
    super();

    this.state = {
      opinionId: null
    }
  }

  getOpinionId = (opinionId) => {
    this.setState({ opinionId }, () => {console.log(this.state.opinionId)})
  }

  render(){
    return (
      <div className="opinion">
        <h2>OPINION</h2>
        <div className="opinion-form">
          <OpinionForm outcomeId={this.props.outcomeId} createOpinion={this.props.createOpinion}
          opinions={this.props.opinions}/>
        </div>
        <div className="opinion-display">
          {this.props.opinions.map((opinion, idx) => <OpinionContent key={idx} opinion={opinion} id={opinion.id}
          getOpinionId={this.getOpinionId.bind(this)}
          deleteOpinion={this.props.deleteOpinion} editOpinion={this.props.editOpinion}
          opinions={this.props.opinions}/>)}
        </div>
      </div>
    )
  }
}
