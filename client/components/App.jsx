import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/events'
import { fetchUsers } from '../actions/users'
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import EventDetails  from './EventDetails'


export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/events/:id' exact component= {EventDetails} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default connect()(App)
