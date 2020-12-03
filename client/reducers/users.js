import { SET_USERS, USER_ADDED } from "../actions/users"

const reducer = (state = [], action) => {
  
  switch (action.type) {
    case SET_USERS:
      return action.users

    case USER_ADDED:
      return [...state, action.user]

    default:
      return state
  }
}

export default reducer
