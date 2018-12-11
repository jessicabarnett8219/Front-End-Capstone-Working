import React, { Component } from "react"
import APIManager from "../../../modules/APIManager"
import BrewingDetail from "./brewing/BrewingDetail"
import { Link } from "react-router-dom"
import BottledDetail from "./bottled/BottledDetail";
import CompletedDetail from "./completed/CompletedDetail"


class BatchDetail extends Component {

  state = {
    batch: {},
    initialized: false,
    currentUser: "",
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({ batch: batchObj, initialized: true}, () => console.log(this.state))
        })
    })
  }

  handleDelete = () => {
    APIManager.deleteEntry("batches", this.state.batch.id)
      .then(() => {
        if (this.state.batch.status === 1) {
          this.props.history.push("/brewing-list")
        } else if (this.state.batch.status === 2) {
          this.props.history.push("/bottled-list")
        } else {
          this.props.history.push("/completed-list")
        }
      })
  }


  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <div>
            <BrewingDetail {...this.state.batch}/>

            <Link to={`/batches/edit/${this.state.batch.id}`}><button
            >Edit Batch</button></Link>

            <button onClick={() => {
              this.handleDelete()
            }}>Delete Batch</button>
            <button onClick={() => {
              if (this.state.batch.status === 1) {
                this.props.history.push("/in-progress-list")
              } else if (this.state.batch.status === 2) {
                this.props.history.push("/in-progress-list")
              } else {
                this.props.history.push("/completed-list")
              }
            }}>Back to Batch List</button>
          </div>
        )
      } else if (this.state.batch.status === 2) {
        return (
          <div>
            <BottledDetail batch={this.state.batch} {...this.props}/>

            <Link to={`/batches/edit/${this.state.batch.id}`}><button
            >Edit Batch</button></Link>


            <button onClick={() => {
              this.handleDelete()
            }}>Delete Batch</button>
            <button onClick={() => {
              if (this.state.batch.status === 1) {
                this.props.history.push("/in-progress-list")
              } else if (this.state.batch.status === 2) {
                this.props.history.push("/in-progress-list")
              } else {
                this.props.history.push("/completed-list")
              }
            }}>Back to Batch List</button>
          </div>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <div>
            <CompletedDetail batch={this.state.batch} {...this.props}/>
            <Link to={`/batches/edit/${this.state.batch.id}`}><button
            >Edit Batch</button></Link>
            <button onClick={() => {
              this.handleDelete()
            }}>Delete Batch</button>
            <button onClick={() => {
              if (this.state.batch.status === 1) {
                this.props.history.push("/in-progress-list")
              } else if (this.state.batch.status === 2) {
                this.props.history.push("/in-progress-list")
              } else {
                this.props.history.push("/completed-list")
              }
            }}>Back to Batch List</button>
          </div>
        )
      }
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}
export default BatchDetail