import React from 'react'
import { connect } from 'react-redux'
import { addNewUser, changeActiveUser } from '../actions/users'
import { Redirect } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export class CreateUser extends React.Component {
  state = {
    imgURL: '',
    username: '',
    email: '',
    bikeType: '',
    redirect: false
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    let newUser = { ...this.state }
    delete newUser.redirect
    this.props.dispatch(addNewUser(newUser))
    this.props.dispatch(changeActiveUser(newUser))
    this.setState({
      imgURL: '',
      username: '',
      email: '',
      bikeType: '',
      redirect: true
    })
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to='/' />
    }
    
    return (
      <div>
        <h1>Create Profile</h1>
        <form className='formBox' onSubmit={this.handleSubmit}>

          <label htmlFor="imgURL">profile picture</label>
          <input className='formInput'
            type="text"
            onChange={this.handleChange}
            value={this.state.imgURL}
            name="imgURL" />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"
            onChange={this.handleChange}
            value={this.state.username} />

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email"
            onChange={this.handleChange}
            value={this.state.email} />


          <label htmlFor="bikeType">Bike type:</label>
          <select id="bikeType" name="bikeType"
            onChange={this.handleChange}
            value={this.state.bikeType}>
            <option defaultValue></option>
            <option value="mountain">Mountain</option>
            <option value="bmx">BMX</option>
            <option value="road">Road</option>
            <option value="unicycle">Unicycle</option>
          </select>

          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }
}

export default connect()(CreateUser)