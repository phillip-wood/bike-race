import request from 'superagent'

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