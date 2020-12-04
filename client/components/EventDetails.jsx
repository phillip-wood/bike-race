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
    
    console.log()
    return (
      <>
      <div>
      <h1>event details</h1>
      <div>
      <SingleEventMap start={JSON.parse(eventDeatils.startPoint)} end={JSON.parse(eventDeatils.endPoint)}/>
      </div>
      <div className='content_container'>
        Event Name: {eventDeatils.eventName}<br/>
        Start Time: {eventDeatils.startTime}<br/>
        Description: {eventDeatils.description}<br/>
        List of PEEPS:
        <ul>
        {eventDeatils.attendees.map(attendent => {
          console.log(attendent, 'attendent')
            return(
             this.props.users.map(att =>{
              if(att.id == attendent){
                console.log(att)
                return(
                  <li key={att.id}>
                    {att.username} <br/>
                    {att.bikeType}
                  </li>
                )}
            }))
          })}
        </ul>
        Player Limit:
      </div>
      </div>
      </>
    )
  }
}
function mapStateToProps(globalState){
  return{
    events: globalState.events,
    users: globalState.users
  }
}
export default connect(mapStateToProps)(EventDetails)
