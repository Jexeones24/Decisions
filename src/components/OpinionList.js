import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class OpinionList extends Component {

  handleClick = (e) => {
    this.props.delete(e)
  }

  render() {
    return (
      <div className="opinion-list">
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
            {this.props.pros.map((pro, i) => <p key={i}>{pro} <button onClick={this.handleClick.bind(this, pro)}>-</button></p>)}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.props.cons.map((con, i) => <p key={i}>{con} <button onClick={this.handleClick.bind(this, con)}>-</button></p>)}
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}


// should this be a container for list items???
