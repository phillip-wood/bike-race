import request from 'superagent'

export const checkTokenAuthenticationAPI = (token) => {
  return request
    .post('/api/auth/authenticate')
    .set('Authorization', token)
    .then(res => {
      return res.body
    })
    .catch(err => {
      return false
    })
}

export const registerNewUserAPI = (newUser) => {
  return request
    .post('/api/auth/register')
    .send(newUser)
    .then(res => res.body)
}

export const loginExistingUserAPI = (existingUser) => {
  return request
    .post('/api/auth/login')
    .send(existingUser)
    .then(res => res.body)
}