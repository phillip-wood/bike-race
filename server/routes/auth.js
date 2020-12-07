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
  secretOrKey: 'secret'
}

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  db.getRegisteredUser({ id: jwt_payload.sub }, function (err, user) {
    console.log('Payload: ', jwt_payload)
    if (err) {
      console.log(opts)
      return done(err, false)
    }
    if (user) {
      console.log(opts)
      return done(null, user)
    } else {
      console.log(opts)
      return done(null, false)
    }
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
        const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.json(token)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/login',
(req, res, next) => {
  db.getRegisteredUser(req.body.username)
  .then(user => {
    bcrypt.compare(req.body.password, user.hash, (err, result) => {
      if (result) {
        const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1d'})
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

// passport.authenticate('jwt', { session: false }),

module.exports = router
