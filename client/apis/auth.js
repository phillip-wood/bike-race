import request from 'superagent'

export const registerNewUserAPI = (newUser) => {
  return request
    .post('/api/auth/register')
    .send(newUser)
    .then(res => {
      window.localStorage.setItem('token', res.body)
      const proof = window.localStorage.getItem('token')
      console.log(proof)
    })
}

export const loginExistingUserAPI = (existingUser) => {
  return request
    .post('/api/auth/login')
    .send(existingUser)
    .then(res => {
      window.localStorage.setItem('token', res.body)
      const proof = window.localStorage.getItem('token')
      console.log(proof)
    })
}