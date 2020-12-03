import React from 'react'
import { connect } from 'react-redux'
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Home from './Home'
import Navbar from './Navbar'
import CreateUser from './CreateUser'


export class App extends React.Component {
  componentDidMount () {
    
  }

  render () {
    return (
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/users/new' component= {CreateUser} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default connect()(App)
