import { UPDATE_POSITION } from '../actions/createEvent'

const initialState = {
  start: [],
  finish: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSITION:
      return {
        ...state,
        [action.marker]: action.newPosition
      }

    default:
      return state
  }
}

export default reducer
