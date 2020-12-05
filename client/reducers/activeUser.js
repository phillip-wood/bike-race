import { ACTIVE_USER_CHANGED, USER_UPDATED } from "../actions/users"


const reducer = (state = null, action) => {
  switch (action.type) {

    case ACTIVE_USER_CHANGED:
      return action.user

    case USER_UPDATED:
      let newState = action.user
      newState.id = action.id
      return newState
      
    default:
      return state
  }
}

export default reducer
