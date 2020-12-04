import { addEventAPI } from '../apis/events'

export const UPDATE_POSITION = 'UPDATE_POSITION'

export const updatePosition = (marker, newPosition) => {
  return {
    type: UPDATE_POSITION,
    marker,
    newPosition
  }
}

export const addEvent = (newEvent) => {
  addEventAPI(newEvent)
}
