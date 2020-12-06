import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

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

  handleClick = () => {
    const { username, password } = form
    register({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <>
      <h2>Register</h2>
      <form action='submit' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text'
          id='username'
          name='username'
          value={form.username}
          onChange={handleChange} />

        <label htmlFor='password'>Password:</label>
        <input type='password'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange} />

        <input type='submit'>Register</input>
      </form>
    </>
  )
}

export default Register
