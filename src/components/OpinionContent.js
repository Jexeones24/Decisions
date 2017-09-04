import React, { Component } from 'react'
import OpinionEditForm from './OpinionEditForm'
import { Button, Item } from 'semantic-ui-react'



export default class OpinionDisplay extends Component {
  constructor(){
    super();

    this.state = {
      editFormVisible: false,
      opinionId: null
    }
  }

  handleDelete = () => {
    this.props.deleteOpinion(this.props)
  }

  formVisible = () => {
    this.setState({ editFormVisible: !this.state.editFormVisible })
  }


  getId = () => {
    let opinionId = this.props.opinion.id
    this.props.getOpinionId(opinionId)
  }

  render(){
    return(
      <div className="opinion-display-content">
        <Item.Group relaxed>
          <Item>
            <Item.Image size='small' src='/assets/images/wireframe/image.png' />

            <Item.Content verticalAlign='middle'>
              <Item.Header>Opinion {this.props.id}</Item.Header>
              <Item.Description>{this.props.opinion.content}</Item.Description>
              <Item.Extra>
                <Button floated='right' onClick={this.formVisible}>
                  Edit
                </Button>
                <Button floated='right' onClick={this.handleDelete}>
                  Delete
                </Button>
                <Button floated='right' onClick={this.getId.bind(this)}>
                  I get the opinion id
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>

        {this.state.editFormVisible ? <div className="edit-form"><OpinionEditForm editOpinion={this.props.editOpinion} opinion={this.props.opinion} id={this.props.idx}/></div> : null}
      </div>
    )
  }
}
