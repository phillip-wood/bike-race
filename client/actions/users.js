import { fetchUsersAPI, editUserAPI } from "../apis/users"
import { registerNewUserAPI, loginExistingUserAPI, checkTokenAuthenticationAPI, matchUserWithTokenAPI } from "../apis/auth"

export const SET_USERS = 'SET_USERS'
export const USER_ADDED = 'USER_ADDED'
export const ACTIVE_USER_CHANGED = 'ACTIVE_USER_CHANGED'
export const USER_UPDATED = 'USER_UPDATED'
export const ACTIVE_USER_UPDATED = 'ACTIVE_USER_UPDATED'
export const ACTIVE_USER_REMOVED = 'ACTIVE_USER_REMOVED'

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

export const addNewUser = user => {
  return dispatch => {
    registerNewUserAPI(user)
    .then(obj => {
      window.localStorage.setItem('token', obj.token)
      return dispatch(setUsers(obj.users))
    })
  }
}

export const editUser = (id, user) => {
  return dispatch => {
    editUserAPI(id, user)
    .then(() => dispatch(updateUser(id, user)))
  }
}

export const verifyUser = (user) => {
  return dispatch => {
    loginExistingUserAPI(user)
    .then(obj => {
      window.localStorage.setItem('token', obj.token)
      dispatch(changeActiveUser(obj.user))
    })
  }
}

export const checkToken = (token) => {
  return dispatch => {
    return checkTokenAuthenticationAPI(token)
    .then(res => {
      if(res){
        matchUserWithTokenAPI(token)
          .then(user => {
            return dispatch(changeActiveUser(user))
          })
      }
    })
  }
}


export const updateUser = (id, user) => {
  return {
    type: USER_UPDATED,
    id,
    user
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

export const removeActiveUser = () => {
  delete window.localStorage.token
  return {
    type: ACTIVE_USER_REMOVED,
  }
}
