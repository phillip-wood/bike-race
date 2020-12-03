import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class UserProfile extends React.Component {


  //   handleChange = evt => {
     
  //   }

  //   handleSubmit = evt => {
  //       evt.preventDefault() 

  //   }


  // componentDidMount() {

  // }

  render() {

    return (
      this.props.activeUser ? <div>
         <h1>Profile</h1>
          <div>
            <div>
            <img src={this.props.activeUser.imgURL}  className='profilePicture' />
            </div>
            <h3>Username: {this.props.activeUser.username}</h3>
            <h3>email: {this.props.activeUser.email}</h3>
            <h3>bike type:{this.props.activeUser.bikeType}</h3>
          </div>
          <div>
            <h3>Upcoming events</h3>
            <ul>
              <li>event</li>
            </ul>
          </div>
          <div>
            <h3>Past events</h3>
            <ul>
              <li></li>
            </ul>
          </div>
          <Link to='/editProfile'>
          <button>Edit profile</button>
          </Link>
     </div> :null
    )
  }
}

function mapStateToProps(globalState) {
  return {
    activeUser: globalState.activeUser,
    events: globalState.events

  }
}

export default connect(mapStateToProps)(UserProfile)