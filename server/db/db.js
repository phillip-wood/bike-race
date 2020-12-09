const connection = require('./connection')

// --------------- EVENT FUNCS -------------------------

function getEvents (db = connection) {
  return db('events').select()
}

function addEvent (newEvent, db = connection) {
  return db('events').insert(newEvent, 'id')
    .then((ids) => {
      return db('users_events').insert({ user_id: newEvent.creator_id, event_id: ids[0] })
    })
}

// --------------- USER FUNCS ----------------------------

function getUsers (db = connection) {
  return db('users').select()
}

function addUser (user, db = connection) {
  return db('users').insert(user, 'id')
}

function editUser (id, user, db = connection) {
  return db('users').update(user).where('id', id)
}

function addUserToEvent(activeUser, db = connection){
  return db('users_events').insert(activeUser, {
    user_id: activeUser.user_id,
    event_id: activeUser.event_id
  })
}

function removeUserFromEvent(activeUser, db = connection){
  return db('users_events')
  .where('event_id', activeUser.event_id)
  .where('user_id', activeUser.user_id)
  .delete()
}

function getAttendees (db = connection) {
  return db('users_events').select()
}

// --------------- COMMENT FUNCS ------------------------

function getComments (db = connection) {
  return db('comments').select()
}

function addComment (comment, db = connection) {
  return db('comments').insert(comment, 'id')
}

// --------------- AUTH FUNCS -------------------
function registerUser (newUser, db = connection) {
  return db('users').insert(newUser)
}

function getRegisteredUser (username, cb, db = connection) {
  return db('users').select()
    .where('username', username)
    .first()
}

function assignUserToken (id, token, db = connection) {
  return db('users')
    .update({ token: token })
    .where('id', id)
}

function getUserByToken (token, db = connection) {
  return db('users')
    .select()
    .where('token', token)
    .first()
}

module.exports = {
  getEvents,
  getComments,
  getAttendees,
  getUsers,
  addEvent,
  addUser,
  addComment,
  addUserToEvent,
  editUser,
  getRegisteredUser,
  registerUser,
  removeUserFromEvent,
  assignUserToken,
  getUserByToken
}
