import React from 'react'

import MainMap from './MainMap'

class CreateEvent extends React.Component {
  state = {
    newEvent: {
      eventName: null,
      startPoint: null,
      endPoint: null,
      description: null,
      time: null,
      date: null
    }
  }

  handleChange = (event) => {
    this.setState({
      newEvent: {
        ...this.state.input,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
  }

  render () {
    return (
      <>
        <MainMap />
        <div className='form-container event-form'>
          <input type="text" name='name' placeholder='Event name' onChange={this.handleChange} />
          <textarea id="" cols="30" rows="5" name='description' placeholder='A brief description of your event' onChange={this.handleChange}></textarea>
          <label htmlFor="time">Event starts:</label>
          <input type="time" name='time' placeholder='time' onChange={this.handleChange} />
          <input type="date" name='date' placeholder='date' onChange={this.handleChange} />
          <input type="submit" name='submit' onClick={this.handleSubmit} />
        </div>
      </>
    )
  }
}

export default CreateEvent
