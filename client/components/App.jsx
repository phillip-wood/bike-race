import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/events'
import { fetchUsers } from '../actions/users'
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import EventDetails from './EventDetails'
import UserProfile from './UserProfile'


export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component= {Home} />
          <Route exact path='/events/:id' component={EventDetails} />
          <Route exact path='/users/active' component={UserProfile} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default connect()(App)
