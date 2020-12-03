import React from 'react'
import { connect } from 'react-redux'

function UserById(props){

  {console.log(props.users[0].id)}
  return (
    <h1></h1>

  )
}

function ms2p(globalState){
  return {
    users: globalState.users
  }
}

export default connect(ms2p)(UserById)