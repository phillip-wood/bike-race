import request from 'superagent'

export const fetchEventsAPI = () => {
  return request
    .get('/api/events')
    .then(res => res.body)
}

export const addTaskAPI = (eventObj) => {
  return request
    .post('/api/events/new')
    .send(eventObj)
    .then(res => res.body)
}
