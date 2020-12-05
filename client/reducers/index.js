import { combineReducers } from 'redux'

import activeUser from './activeUser'
import events from './events'
import users from './users'
import createEvent from './createEvent'

export default combineReducers({
  activeUser,
  events,
  users,
  createEvent
})
