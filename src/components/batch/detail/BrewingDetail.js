import React, { Component } from "react"
import { Grid, Button, Header, List } from 'semantic-ui-react'
import { Link } from "react-router-dom"

class BrewingDetail extends Component {

  render() {
    return (
      <Grid columns={1} padded={true}>
        <Grid.Column>
          <Header as="h1" textAlign="center">Batch Details</Header>
          <List>
            <List.Item>
              <List.Content ><Header size="medium">Name</Header>{this.props.name}</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Type</Header>{this.props.type}</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Brewing Since</Header>{this.props.startDate}</List.Content>
            </List.Item>

            <List.Item>
              <List.Content><Header size="medium">Ingredients</Header>{this.props.ingredients}</List.Content>
            </List.Item>

          </List>
          <Grid.Row>
            <Link to={`/bottle/${this.props.batchId}`}><Button>Bottle Batch</Button></Link>
          </Grid.Row>
          <Grid.Row>
            <Button>Edit Batch</Button>
          </Grid.Row>
          <Grid.Row>
            <Button>Delete Batch</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )

  }

}
export default BrewingDetail