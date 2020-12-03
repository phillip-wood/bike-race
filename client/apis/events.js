import request from 'superagent'

export const fetchEventsAPI = () => {
  return request
    .get('/api/events')
    .then(res => res.body)
}