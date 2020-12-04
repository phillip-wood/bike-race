import React from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/events'
import { fetchUsers } from '../actions/users'
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import Events from './Events'
import Comments from './Comments'
import UserProfile from './UserProfile'
import CreateUser from './CreateUser'
import EventDetails from './EventDetails'
import EditUser from './EditProfileForm'
import UserById from './UserById'



export class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      <>
      <Router>
        {/* <Navbar/> */}
        <a href="/events/:id/comments">my page</a>
          <Route exact path='/' component= {Home} />
          {this.props.users.length &&  
          <Switch>
            <Route exact path='/events' component= {Events} />
            <Route exact path='/events/:id' component={EventDetails} />
            <Route exact path='/users/active' component={UserProfile} />
            <Route exact path='/users/new' component= {CreateUser} />
            <Route exact path='/users/:id' component= {UserById}/>
            <Route exact path='/events/:id/comments' component= {Comments}/>
          </Switch>
          }
      </Router>
      </>
    )
  }
}

function ms2p(globalState){
  return {
    users: globalState.users
  }
}

export default connect(ms2p)(App)
