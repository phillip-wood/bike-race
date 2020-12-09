import React from 'react'

import { registerNewUserAPI } from '../apis/auth'

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newUser = { ...this.state }
    console.log('Submit: ', newUser)
    registerNewUserAPI(newUser)
  }

  // this is how we save and access the token from the window.localStorage!!!
  // localStorage.setItem('myCat', 'Tom');
  // const cat = localStorage.getItem('myCat');


  // handleClick = () => {
  //   const { username, password } = form
  //   register({ username, password }, { baseUrl })
  //     .then((token) => {
  //       if (isAuthenticated()) {
  //         props.history.push('/')
  //       }
  //     })
  // }

  render () {
    return (
      <>
        <h2>Register</h2>
        <form action='submit' onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input type='text'
            id='username'
            name='username'
            value={this.state.username}
            onChange={this.handleChange} />
          <label htmlFor='email'>Email:</label>
          <input type='email'
            id='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange} />
          <label htmlFor='password'>Password:</label>
          <input type='password'
            id='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange} />
  
          <input type='submit' value='Register'/>
        </form>
      </>
    )
  }
}

export default Register
