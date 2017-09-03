import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class OpinionList extends Component {
  constructor(){
    super();
  }

  handleClick = (e) => {
    let opinionContent = e
    this.props.delete(opinionContent)
  }

  render() {
    return (
      <div className="opinion-list">
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.props.pros.map((pro, i) => <h5 key={i}>{pro} <button onClick={this.handleClick.bind(this, pro)}>-</button></h5>)}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.props.cons.map((con, i) => <h5 key={i}>{con} <button onClick={this.handleClick.bind(this, con)}>-</button></h5>)}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
