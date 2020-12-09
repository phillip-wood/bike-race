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
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
    .catch(err => {
      return done(err, false)
    })
}))

router.post('/register', (req, res) => {
  let token
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
          token = 'Bearer ' + jwt.sign({ sub: user }, process.env.JWT_SECRET, { expiresIn: '1d' })
          return token
        })
        .then(() => {
          return db.getUsers()
        })
        .then(users => {
          const resObj = {
            token: token,
            users: users
          }
          res.json(resObj)
        })
    })
    .catch(err => {
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/login', (req, res) => {
  let resObj
  db.getRegisteredUser(req.body.username)
    .then(user => {
      if (user) {
          return bcrypt.compare(req.body.password, user.hash)
          .then((result) => {
            if (result) {
              const token = 'Bearer ' + jwt.sign({ sub: user }, process.env.JWT_SECRET, { expiresIn: '1d' })
              const userObj = {
                ...user,
                hash: user.hash
              }
              delete userObj.password
              resObj = {
                token: token,
                user: userObj
              }
              resObj.user.token = resObj.token
              return resObj
            }
          })
      } else {
        console.log('no user found')
        return res.status(500).json({ message: 'No user found' })
      }
    })
    .then((resObj) => {
      return db.assignUserToken(resObj.user.id, resObj.token)
    })
    .then(() => {
      res.json(resObj)
    })
    .catch(err => {
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/authenticate', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(true)
})

router.post('/match', (req, res) => {
  console.log(req.body)
  return db.getUserByToken(req.body.token)
  .then(user => {
      res.json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
