import React from 'react'
import { connect } from 'react-redux'


class Comments extends React.Component {


  render() {

    let eventComments = this.props.events.find(event => event.id == this.props.match.params.id)

    {console.log(eventComments)}

    return (
      <>
      <h1>Comments</h1>
      {/* <ul>
      {eventComments.comments.map ( comments => {
        return (
          <li><p>test</p></li>
        )
      })}
      </ul> */}
      </>
    )
  }
}
function mapStateToProps (globalState) {
    return {
      events: globalState.events,
    }
  }
  
  export default connect(mapStateToProps)(Comments)