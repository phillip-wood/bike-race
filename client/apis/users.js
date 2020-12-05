import request from 'superagent'

export const fetchUsersAPI = () => {
  return request
    .get('/api/users')
    .then(res => res.body)
}

export const addUserAPI = (user) => {
  return request
    .post('/api/users')
    .send(user)
    .then(res => res.body)
}

export const editUserAPI = (id, user) => {
  return request
    .patch('/api/users/' + id)
    .send(user)
    .then(res => res.body)
}

