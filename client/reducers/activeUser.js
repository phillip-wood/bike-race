import { ACTIVE_USER_CHANGED, USER_UPDATED } from "../actions/users"

const initial = {
  id: 3,
  username: 'bonecrusher',
  email: 'rose@gmail.com',
  imgURL: 'https://alchetron.com/cdn/sarah-walker-bmx-rider-e5e6abf1-fd8c-4070-b41f-1eef9785984-resize-750.jpeg',
  eventsAttended: null,
  bikeType: 'road bike'
}

const reducer = (state = initial, action) => {
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
