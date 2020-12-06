const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
// const jwt = require('jsonwebtoken')

const db = require('../db/db')

const saltRounds = 7

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
// opts.secretOrKey = 'secret'
// opts.issuer = 'accounts.examplesoft.com'
// opts.audience = 'yoursite.net'
// eslint-disable-next-line camelcase
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  User.findOne({ id: jwt_payload.sub }, function (err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
      // or you could create a new account
    }
  })
}))

router.post('/register',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    bcrypt.hash(req.body.password, saltRounds)
      .then((hash) => {
        const user = {
          username: req.body.username,
          email: req.body.email,
          hash: hash
        }
        return user
      }).then(user => db.registerUser(user))
      .then(() => res.status(201).json({ ok: true }))
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  })

// router.post('/login', (req, res) => {

// })

module.exports = router
