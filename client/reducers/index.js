import { combineReducers } from 'redux'

import activeUser from './activeUser'
import events from './events'
import users from './users'

export default combineReducers({
  activeUser,
  events,
  users,
})