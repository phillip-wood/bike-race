import { COMMENT_ADDED, SET_EVENTS, USER_ADDED_TO_EVENT } from "../actions/events"

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.events

    case COMMENT_ADDED:
      let newState = [...state]
      let event = newState.find(event => event.id == action.id)
      event.comments.push(action.comment)
      return newState

    case USER_ADDED_TO_EVENT:
    let newState2 = [...state]
    let event2 = newState2.find(event => event.id == action.attendees.event_id)
    event2.attendees.push(action.attendees.user_id)
    return newState2
    
    default:
      return state
  }
}

export default reducer
