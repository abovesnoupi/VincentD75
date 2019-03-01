// ==================
// Global actions
// ==================


// Insert les salles dans le state
export const HandleRooms = (state, rooms) => ({
  ...state,
  rooms
})


export const HandleUsers = (state, users) => ({
  ...state,
  users
})



// Ajoute un message a la liste de messages
export const HandleNewMessage = (state, message) => ({
  ...state,
  messages: [message].concat(state.messages)
})

