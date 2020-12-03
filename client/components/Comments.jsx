import React from 'react'
import { connect } from 'react-redux'

export class Comments extends React.Component {

    render () {

        console.log(this.props.events)

      return (
        <>
          <h3>Comments</h3>
          {/* {this.props.events.map(event => {
            return(
                <p>test</p>
            )
          })} */}
        </>
      )
    }
  }
  
  function mapStateToProps (globalState) {
    return {
      events: globalState.events
    }
  }
  
  export default connect(mapStateToProps)(Comments)