import React from 'react'
import { connect } from 'react-redux'
import { changeActiveUser } from '../actions/users'
import { Redirect } from 'react-router-dom'


class Login extends React.Component {
  state = {
    username: '',
    email: '',
    redirect: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let thisUser = this.props.users.find(user => user.username == this.state.username)
    if(thisUser){
      if(thisUser.email == this.state.email){
        this.props.dispatch(changeActiveUser(thisUser))
        this.setState({ redirect: true })
      } else {
        alert('Your username and email do not match. Please enter valid username and email')
      }
    } else {
      alert('user doesnt exist, please enter a valid username')
    }
  }

  render() {
    const { redirect } = this.state
    if(redirect){
      return <Redirect to='/' />
    }

    return (
      <>
      <div className='formDiv'>
        <form action="" onSubmit={this.handleSubmit} className='loginForm'>
        <h5 className='loginHeader'>Login</h5>
        <label htmlFor="username">Username:</label>
          <input type="text"
            name='username'
            placeholder='Username'
            onChange={this.handleChange} />
            <label htmlFor="email">Email:</label>
          <input type="text"
            name='email'
            placeholder='Email'
            onChange={this.handleChange} />
            <label htmlFor="password">Password:</label>
          <input type="password"
            name='password'
            placeholder='password' />
            <div className="button" id="button-5">
            <div id="translate"></div>
          <button type="submit" className='actual-button'>Sign in</button>
          </div>
        </form>
        </div>
      </>
    )
  }
}

function ms2p(globalState){
  return {
    users: globalState.users,
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(Login)