const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getUsers()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router