import { SET_EVENTS } from "../actions/events"

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    default:
      return state
  }
}

export default reducer
