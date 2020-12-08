const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const db = require('../db/db')

const saltRounds = 10

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(opts, (payload, done) => {
  db.getRegisteredUser(payload.sub.username)
    .then(user => {
      console.log('Payload: ', payload)
      if (user) {
        console.log('User:', opts)
        return done(null, user)
      } else {
        console.log('NoUser:', opts)
        return done(null, false)
      }
    })
    .catch(err => {
      console.log('Error: ', err)
      return done(err, false)
    })
}))

router.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      const user = {
        username: req.body.username,
        email: req.body.email,
        hash: hash,
        imgURL: req.body.imgURL,
        bikeType: req.body.bikeType
      }
      return user
    }).then(user => {
      db.registerUser(user)
      .then(() => {
        const token = 'Bearer ' + jwt.sign({sub: user}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.json(token)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/login',
(req, res) => {
  db.getRegisteredUser(req.body.username)
  .then(user => {
    bcrypt.compare(req.body.password, user.hash, (err, result) => {
      if (result) {
        const token = 'Bearer ' + jwt.sign({sub: user}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.json(token)
      } else {
        console.log(err)
      }
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  })
})

router.post('/authenticate', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(true)
})

router.get('/restricted', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({succeed: 'true'})
})

// passport.authenticate('jwt', { session: false }),

module.exports = router
