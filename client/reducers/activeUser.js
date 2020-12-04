import { ACTIVE_USER_CHANGED, USER_UPDATED } from "../actions/users"

const initialState = {
  id: 1,
  username: 'bonecrusher',
  email: 'blackie@gmail.com',
  imgURL: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQYxMf1KNukK03qsdLZgFfMqKGES6jbrgACOFpKJ45Nyr-UQMt5LL8EqCD6g95VXEaE7ZZmaNuzfy93jb8Iqho',
  eventsAttended: 17,
  bikeType: 'BMX'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTIVE_USER_CHANGED:
      return action.user

    case USER_UPDATED:
      let newState = action.user
      newState.id = action.id
      return newState
      
    default:
      return state
  }
}

export default reducer
