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
        <h1>Edit your profile, {this.props.activeUser.username}</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <label htmlFor="imgURL">imgURL</label>
          <input
            type="text"
            name="imgURL"
            onChange={this.handleChange}
            value={this.state.imgURL}
          />

          <label htmlFor="bikeType">Bike type:</label>
          <select
            name="bikeType"
            onChange={this.handleChange}
            value={this.state.bikeType}>
            <option value="Mountain">Mountain</option>
            <option value="BMX">BMX</option>
            <option value="Road">Road</option>
            <option value="Unicycle">Unicycle</option>
          </select>

          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }
}

// username(pin):"bonecrusher"
// email(pin):"blackie@gmail.com"
// imgURL(pin):"http://t1.gstatic.com/images?q=tbn:ANd9GcQYxMf1KNukK03qsdLZgFfMqKGES6jbrgACOFpKJ45Nyr-UQMt5LL8EqCD6g95VXEaE7ZZmaNuzfy93jb8Iqho"
// bikeType(pin):"BMX"

function mapStateToProps(globalState) {
  return {
    activeUser: globalState.activeUser
  }
}

export default connect(mapStateToProps)(EditUser)
