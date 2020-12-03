import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions'

export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
  }

  render () {
    return (
      <div>
        <h1>Bike race</h1>
      </div>
    )
  }
}

export default connect()(App)
