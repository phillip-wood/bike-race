import React from 'react'
import { connect } from 'react-redux'

import MainMap from './MainMap'

class CreateEvent extends React.Component {
  state = {
    newEvent: {
      eventName: null,
      description: null,
      startPoint: null,
      endPoint: null,
      startTime: null,
      maxGroupSize: 8,
      distance: null
    }
  }

  handleChange = (event) => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        [event.target.name]: event.target.value
      }
    })
  }

  handleTimeChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.convertTime()
    // Add location data to local state
    // Send API POST request
  }

  convertTime = () => {
    const str = this.state.date + ' ' + this.state.time + ' ' + 'UTC'
    const epoch = Math.floor(new Date(str) / 1000)
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        startTime: epoch
      }
    })
  }

  render () {
    return (
      <>
        <MainMap />
        <div className='form-container event-form'>
          <input type="text" name='eventName' placeholder='Event name' onChange={this.handleChange} />
          <textarea id="" cols="30" rows="5" name='description' placeholder='A brief description of your event' onChange={this.handleChange}></textarea>
          <label htmlFor="time">Event starts:</label>
          <input type="time" name='time' placeholder='time' onChange={this.handleTimeChange} />
          <input type="date" name='date' placeholder='date' onChange={this.handleTimeChange} />
          <input type="submit" name='submit' onClick={this.handleSubmit} />
        </div>
      </>
    )
  }
}

export default connect()(CreateEvent)
