import request from 'superagent'

export const fetchEventsAPI = () => {
  return request
    .get('/api/events')
    .then(res => res.body)
}

export const addEventAPI = eventObj => {
  return request
    .post('/api/events/new')
    .send(eventObj)
    .then(res => res.body)
}

export const addCommentAPI = comment => {
  return request
    .post('/api/events/addcomment')
    .send(comment)
    .then(res => res.body)
}
