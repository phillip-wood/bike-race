import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/events'
import { Redirect, Link } from 'react-router-dom'



class Comments extends React.Component {

  state = {
    newComment: '',
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      newComment: event.target.value
    })
  }

  submitComment = (username, eventId) => {
    let newComment = {
      username: username,
      comment: this.state.newComment,
      event_id: eventId
    }
    this.props.dispatch(addComment(newComment, eventId))
    this.setState({ newComment: '' })
    this.setState({ redirect: true })
  }



  render() {
    const { redirect } = this.state
    const url = `/events/${this.props.match.params.id}`
    if (redirect) {
      return <Redirect to={url} />
    }

    //find event based on params
    let eventComments = this.props.events.find(event => event.id == this.props.match.params.id)

    return (
      <>
      <Link to={url}>Back to Event</Link>
        <h2>Event Comments</h2>
        <ul>
          {eventComments.comments.map(comments => {
            return (
              <li key={comments.id}>
                <h3>{comments.username}</h3>
                <p>{comments.comment}</p></li>
            )
          })}
        </ul>

        <h2>Add Comment</h2>
        <input
          type="text"
          placeholder='Enter comment'
          onChange={this.handleChange}
          value={this.state.newComment} />
        <button onClick={() => this.submitComment(this.props.activeUser.username, this.props.match.params.id)}>Submit comment</button>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    events: globalState.events,
    activeUser: globalState.activeUser
  }
}

export default connect(mapStateToProps)(Comments)