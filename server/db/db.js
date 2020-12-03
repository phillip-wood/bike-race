const connection = require('./connection')

function getEvents (db = connection) {
  return db('events').select()
}

function getComments (db = connection) {
  return db('comments').select()
}

function getAttendees (db = connection) {
  return db('users_events').select()
}

function getUsers (db = connection) {
  return db('users').select()
}

function addUser (user, db = connection) {
  return db('users').insert(user)
}


module.exports = {
  getEvents,
  getComments,
  getAttendees,
  getUsers,
  addUser,
}