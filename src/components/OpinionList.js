import React from 'react'
import { Grid } from 'semantic-ui-react'

const OpinionList = ({ pros, cons }) => {

  const handleClick = () => {
    return(
      console.log("delete me")
    )
  }

  return (
    <div className="opinion-list">
      <Grid>
        <Grid.Row>
        <Grid.Column width={8}>
          {pros.map((pro, i) => <p key={i}>{pro} <button onClick={handleClick}>-</button></p>)}
        </Grid.Column>
        <Grid.Column width={8}>
          {cons.map((con, i) => <p key={i}>{con} <button onClick={handleClick}>-</button></p>)}
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default OpinionList

// should this be a container for list items???
