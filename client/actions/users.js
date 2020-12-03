import { fetchUsersAPI } from "../apis/users"

export const SET_USERS = 'SET_USERS'

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