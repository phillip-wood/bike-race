import React from 'react'
import { connect } from 'react-redux'


export class App extends React.Component {
  componentDidMount () {
    
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
