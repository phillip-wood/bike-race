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
    console.log(jwt_payload)
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
      // or you could create a new account
    }
  })
}))

router.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      const user = {
        username: req.body.username,
        email: req.body.email,
        hash: hash
      }
      return user
    }).then(user => {
      const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1d'})
      res.json(token)
    })
    .then(() => res.status(201).json({ ok: true }))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/login',
  // passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    db.getRegisteredUser(req.body.username)
      .then(user => {
        bcrypt.compare(req.body.password, user.hash, (err, result) => {
          if (result) {
            // Set user as logged in?
            const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1d'})
            res.json(token)
          } else {
            // Send to register screen?
            console.log('No result :(')
          }
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })

  })

module.exports = router
