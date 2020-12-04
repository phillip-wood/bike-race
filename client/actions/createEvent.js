import { fetchEventsAPI } from '../apis/events'

export const CREATE_EVENT = 'CREATE_EVENT'

export const createEvent = (newEvent) => {
  return {
    type: CREATE_EVENT,
    newEvent
  }
}

export const fetchEvents = () => {
  return dispatch => {
    fetchEventsAPI()
      .then(event => dispatch(createEvent(event)))
  }
}
