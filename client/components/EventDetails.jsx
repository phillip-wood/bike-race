import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleEventMap from './SingleEventMap'
import {postUserToEvent} from '../actions/events'

class EventDetails extends React.Component{
  render(){

    const addUserToEvent= ()=>{
      const addEvent={
          user_id: this.props.activeUser.id,
          event_id: parseInt(this.props.match.params.id)
      }
        this.props.dispatch(postUserToEvent(addEvent))
    }



    const eventDeatils = this.props.events.find(event =>{
      return event.id == this.props.match.params.id
    })
    return (
      <>
      { eventDeatils && (<div>
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
            return(
             this.props.users.map(att =>{
              if(att.id == attendent){
                return(
                  <>
                  <li key={att.id}>
                    <Link to={`/users/${att.id}`}>
                    {att.username} <br/>
                    {att.bikeType}
                    </Link>
                  </li>
                </>
                )}
              }))
            })}
        </ul>
            Player Limit: {eventDeatils.attendees.length}/{eventDeatils.maxGroupSize}<br/>
            <Link to={`/events/${eventDeatils.id}/comments`} >
            Comments: {eventDeatils.comments.length}
            </Link>
            <button onClick={()=> addUserToEvent()}>Join Event</button>
      </div>
      </div>
      )}
      </>
    )
  }
}
function mapStateToProps(globalState){
  return{
    events: globalState.events,
    users: globalState.users,
    activeUser: globalState.activeUser
  }
}
export default connect(mapStateToProps)(EventDetails)
