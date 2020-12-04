import React from 'react'
import { connect } from 'react-redux'

function UserById(props){

  let thisUser = props.users.find(user => user.id == props.match.params.id)

  return (
    <div>
      <h1>{thisUser.username}</h1>
      <img src={thisUser.imgURL} alt="No profile picture available"/>
      <h5>{thisUser.email}</h5>
    </div>

  )
}

function ms2p(globalState){
  return {
    users: globalState.users
  }
}

export default connect(ms2p)(UserById)