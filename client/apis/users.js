import request from 'superagent'

export const fetchUsersAPI = () => {
  return request
    .get('/api/users')
    .then(res => res.body)
}