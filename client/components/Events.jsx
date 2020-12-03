import React from 'react'
import { connect } from 'react-redux'
import CurrentEvents from './CurrentEvents'
import PastEvents from './PastEvents'


class Events extends React.Component {

  render() {
    return (
      <>
      <CurrentEvents/>
      <PastEvents/>
      </>
    )
  }
}

function mapStateToProps (globalState) {
    return {
      events: globalState.events
    }
  }
  
  export default connect(mapStateToProps)(Events)
