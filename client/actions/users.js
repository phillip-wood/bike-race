import { fetchUsersAPI, addUserAPI } from "../apis/users"

export const SET_USERS = 'SET_USERS'
export const USER_ADDED = 'USER_ADDED'
export const ACTIVE_USER_CHANGED = 'ACTIVE_USER_CHANGED'

export const fetchUsers = () => {
  return dispatch => {
    fetchUsersAPI()
    .then(users => dispatch(setUsers(users)))
  }
}

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  }
}

export const addNewUser = (user) => {
  return dispatch => {
    addUserAPI(user)
    .then(id => {
      user.id = id
      dispatch(addUser(user))
    })
  }
}

export const addUser = user => {
  return {
    type: USER_ADDED,
    user
  }
}

export const changeActiveUser = user => {
  return {
    type: ACTIVE_USER_CHANGED,
    user
  }
}