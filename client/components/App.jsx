import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/events'
import { fetchUsers } from '../actions/users'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import Button from './Button'
import CreateEvent from './CreateEvent'
import Events from './Events'
import Comments from './Comments'
import UserProfile from './UserProfile'
import CreateUser from './CreateUser'
import EventDetails from './EventDetails'
import UserById from './UserById'
import EditUser from './EditUser'



export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents())
    this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          {/* put logic around this home route for if not logged in  */}
          <Route exact path='/' component={Home} />
          <Switch>
            <Route exact path='/users/new' component={CreateUser} />
            <Route exact path='/users/active' component={UserProfile} />
            <Route exact path='/users/:id' component={UserById} />
            <Route exact path='/users/active/edit' component={EditUser} />
          </Switch>
          <Route exact path='/createEvent' component={CreateEvent} />
          <Route exact path='/events' component={Events} />
          {this.props.users.length ?
          <>
            <Route exact path='/events/:id' component={EventDetails} /> {/* } */}
            <Route exact path='/events/:id/comments' component={Comments} /> {/* } */}
          </> : null
          }
        </Router>
      </>
    )
  }
}

function ms2p(globalState) {
  return {
    users: globalState.users
  }
}

export default connect(ms2p)(App)
