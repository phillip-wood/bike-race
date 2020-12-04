import { addCommentAPI, fetchEventsAPI, addUserToEventAPI } from "../apis/events"

export const SET_EVENTS = 'SET_EVENTS'
export const COMMENT_ADDED = 'COMMENT_ADDED'
export const USER_ADDED_TO_EVENT = 'USER_ADDED_TO_EVENT'

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

export const addComment = (comment, id) => {
  return dispatch => {
    addCommentAPI(comment)
      .then(newId => {
        let newComment = {...comment}
        newComment.id = newId
        dispatch(addNewComment(newComment, id))
      })
  }
}

export const addNewComment = (newComment, id) => {
  return {
    type: COMMENT_ADDED,
    comment: newComment,
    id
  }
}
export const addUserToEvent = (activeUser) => {
  console.log(activeUser)
  return {
    type: USER_ADDED_TO_EVENT,
    attendees: activeUser
   
  }
}

export const postUserToEvent = (activeUser) => {
  return dispatch => {
    addUserToEventAPI(activeUser)
      .then(() => {
        dispatch(addUserToEvent(activeUser))
      })
  }
}

