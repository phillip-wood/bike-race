import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleEventMap from './SingleEventMap'

class EventDetails extends React.Component{
  render(){
    const eventDeatils = this.props.events.find(event =>{
      // console.log(event)
      return event.id == this.props.match.params.id
    })
    
    // console.log(eventDeatils.id)
    return (

      <>
      <div>
      <h1>event details</h1>
      <SingleEventMap/>

      </div>
      </>
    )
  }
}
function mapStateToProps(globalState){
  return{
    events: globalState.events
  }
}
export default connect(mapStateToProps)(EventDetails)