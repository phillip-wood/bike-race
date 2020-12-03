import React from 'react'
import { connect } from 'react-redux'

class Comments extends React.Component {

  render() {
    return (
      <>
      <h1 className='title'>Comments</h1>

      <ul>
      {this.props.comments.map( comments => {
        return (
          <li><p>{comments.comment}</p></li>
        )
      })}
      </ul>
      </>
    )
  }
}
function mapStateToProps (globalState) {
    return {
      comments: globalState.comments,

    }
  }
  
  export default connect(mapStateToProps)(Comments)