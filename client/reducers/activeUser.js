import { ACTIVE_USER_CHANGED, USER_UPDATED } from "../actions/users"

let initial ={
  id: 1,
  username: 'wonderphil',
  email: 'phillip.wood369@gmail.com',
  imgURL: 'https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1395&q=80',
  bikeType: 'BMX'
}

const reducer = (state = initial, action) => {
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
