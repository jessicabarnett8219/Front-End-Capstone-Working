import React, { Component } from "react"
import { Grid, Form, Button, Header } from 'semantic-ui-react'


class SampleForm extends Component {
  render() {
    return (
      <Grid columns={1} padded={true}>
      <Grid.Column>
        <Header as="h1" textAlign="center">Sample A Batch</Header>

        <Form>
          <Form.Input fluid label="Sample Date" type="date" />
          <Form.Group inline>
            <label>Rating</label>
            <Form.Radio label="Thumbs Up" />
            <Form.Radio label="Thumbs Down" />
          </Form.Group>
          <Form.Input label="Review Notes" type="text" />
          <Button>Cancel</Button>
          <Button>Save</Button>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }
}
export default SampleForm