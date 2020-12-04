import { addCommentAPI, fetchEventsAPI } from "../apis/events"

export const SET_EVENTS = 'SET_EVENTS'
export const COMMENT_ADDED = 'COMMENT_ADDED'

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