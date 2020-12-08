import request from 'superagent'

export const checkTokenAuthenticationAPI = () => {
  const token = window.localStorage.getItem('token')
  console.log('Did the auth thing')
  return request
    .post('/api/auth/authenticate')
    .set('Authorization', token)
    .then(res => {
      console.log(res.body)
      return res.body
    })
    .catch(err => {
      console.log(err.message)
      console.log('False')
      return false
    })
}

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