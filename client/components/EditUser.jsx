import React from 'react'
import { connect } from 'react-redux'
import { editUser } from '../actions/users'
import { Redirect } from 'react-router-dom'

export class EditUser extends React.Component {
  state = {
    username: this.props.activeUser.username,
    email: this.props.activeUser.email,
    imgURL: this.props.activeUser.imgURL,
    bikeType: this.props.activeUser.bikeType,
    redirect: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let updatedUser = {...this.state}
    delete updatedUser.redirect
    this.props.dispatch(editUser(this.props.activeUser.id, updatedUser))
    this.setState({redirect: true})
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/users/active' />
    }

    return (
      <div>
        <h1 className='editUserHeader'>Edit your profile, {this.props.activeUser.username}</h1>
        <div className='editUserBox'>
        <form onSubmit={this.handleSubmit} className='editUserContainer'>

          <label htmlFor="username" className='editUserLabel'>Username:</label>
          <input  className='editUserInput'
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <br/>
          <label htmlFor="email" className='editUserLabel'>Email</label>
          <input  className='editUserInput'
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br/>
          <label htmlFor="imgURL" className='editUserLabel'>imgURL</label>
          <input  className='editUserInput'
            type="text"
            name="imgURL"
            onChange={this.handleChange}
            value={this.state.imgURL}
          />
          <br/>
          <label htmlFor="bikeType" className='editUserLabel'>Bike type:</label>
          <select  className='editUserInput'
            name="bikeType"
            onChange={this.handleChange}
            value={this.state.bikeType}>
            <option value="Mountain">Mountain</option>
            <option value="BMX">BMX</option>
            <option value="Road">Road</option>
            <option value="Unicycle">Unicycle</option>
          </select>
          <br/>
        </form>
        <div class="button" id="button-5">
          <div id="translate"></div>
            <button type="submit">Confirm</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    activeUser: globalState.activeUser
  }
}

export default connect(mapStateToProps)(EditUser)
