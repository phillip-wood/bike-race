const initialState = [
  {
    id: 1,
    eventName: 'downhill to the death',
    description: 'only the strong will survive, enter at your own risk',
    startPoint: [123123.234234, 1221.1231231],
    endPoint: [123123.2342, 123123.1231],
    startTime: 124124927428,
    maxGroupSize: 15,
    distance: 3.4,
    creator_id: 1,
    attendees: [1, 4, 6, 8, 12],
    comments: [
      {
        id: 1,
        username: 'phil',
        comment: 'ima waste you fools like that girl in school wasted me'
      },
      {
        id: 2,
        username: 'manu',
        comment: 'ill break your bones.'
      }
    ]
  },
  {
    id: 2,
    eventName: 'uphill',
    description: 'only the strong will survive, enter at your own risk',
    startPoint: [123123.234234, 1221.1231231],
    endPoint: [123123.2342, 123123.1231],
    startTime: 124124927428,
    maxGroupSize: 13,
    distance: 3.4,
    creator_id: 1,
    attendees: [1, 4, 6],
    comments: [
      {
        id: 1,
        username: 'gareth',
        comment: 'gore is the best'
      },
      {
        id: 2,
        username: 'adam',
        comment: 'northland forever'
      }
    ]
  }
]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
