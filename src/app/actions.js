// ==================
// Global actions
// ==================

// Insert les salles dans le state
export const HandleRooms = (state, rooms) => {
  // console.log(rooms)
  return {
    ...state,
    rooms
  }
}

// Insert les messages dans le state
export const HandleMessages = (state, messages) => ({
  ...state,
  messages
})

// Ajoute un message a la liste de messages
export const HandleNewMessage = (state, message) => ({
  ...state,
  messages: [message].concat(state.messages)
})

