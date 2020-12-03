import React from 'react'
import { connect } from 'react-redux'


class CurrentEvents extends React.Component {
    
  render() {
    return (
      <>
      <h1>Upcoming Events</h1>
         <ul>
        {this.props.events.map( event => { 
            //declears new date varible for current time/date
           let d = new Date()
           // converts it into epoch time
           let currentTime = d.getTime()
           
           // converts epoch race time to date/time
           let raceFullDate = new Date(event.startTime)
           let raceTime = raceFullDate.toLocaleTimeString()
           let raceDate = raceFullDate.toLocaleDateString()

            if(currentTime > event.startTime){
            return (
                <li key={event.id} 
                    className='event--li'>
                    <a href={`event/${event.id}`}>
                        <h2>{event.eventName}</h2>
                        <h4>{`Time ${raceTime}`}</h4>
                        <h4>{`Date ${raceDate}`}</h4>
                        <p>{event.description}</p>
                    </a>
                </li>
            )
            }})}
        </ul>
      </>
    )
  }
}

function mapStateToProps (globalState) {
    return {
      events: globalState.events
    }
  }
  
  export default connect(mapStateToProps)(CurrentEvents)



