const express = require('express')
const router = express.Router()
const db = require('../db/db')


router.get('/', (req, res) => {
  let events
  return db.getEvents()
    .then(results => {
      events = results
      return events
    })
    .then(() => db.getComments())
    .then(comments => {
      events.forEach(event => {
      event.comments = comments.filter(comment => comment.event_id === event.id)
      })
      return events
    })
    .then(() => db.getAttendees())
    .then(arr => {
      events.forEach(event => {
        const attendeesArr = arr.filter(id => id.event_id === event.id)
        event.attendees = attendeesArr.map(item => item.id)
      })
      return events
    })
    .then(() => res.json(events))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
