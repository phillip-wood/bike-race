import React from 'react'
import { connect } from 'react-redux'
import { verifyUser } from '../actions/users'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    redirect: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let registeredUser = { ...this.state }
    delete registeredUser.redirect
    this.props.dispatch(verifyUser(registeredUser))
    this.setState({ redirect: true })
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
        <h5 className='loginHeader'>Login to enter a race!</h5>
          <input type="text"
            name='username'
            placeholder='Username'
            onChange={this.handleChange} />
          <input type="text"
            name='email'
            placeholder='Email'
            onChange={this.handleChange} />
          <input type="password"
            name='password'
            placeholder='password'
            onChange={this.handleChange} />
          <input type="submit" className='formSubmit'/>
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