import { COMMENT_ADDED, SET_EVENTS } from "../actions/events"

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    case COMMENT_ADDED:
      let newState = [...state]
      let event = newState.find(event => event.id == action.id)
      event.comments.push(action.comment)
      return newState
    default:
      return state
  }
}

export default reducer
