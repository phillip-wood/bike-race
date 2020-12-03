import { fetchEventsAPI } from "../apis/events"

export const SET_EVENTS = 'SET_EVENTS'

export const fetchEvents = () => {
  return dispatch => {
    fetchEventsAPI()
    .then(events => dispatch(setEvents(events)))
  }
}

export const setEvents = (events) => {
  return {
    type: SET_EVENTS,
    events
  }
}