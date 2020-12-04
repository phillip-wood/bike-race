import { CREATE_EVENT } from '../actions/createEvent'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return action.event

    default:
      return state
  }
}

export default reducer
