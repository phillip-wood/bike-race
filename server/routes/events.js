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
      console.log(comments)
      events.forEach(event => {
        const newArr = comments.filter(comment => comment.event_id === event.id)
        event.comments = newArr
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
