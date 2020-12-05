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


export const addUserToEventAPI = activeUser =>{
  return request
    .post('/api/events/addtoevent')
    .send(activeUser)
    .then(res => {res.body})
}

export const removeUserFromEventAPI = activeUser =>{
  return request
    .del('/api/events/removefromevent')
    .send(activeUser)
    .then(res => {res.body})
}

