// ==================
// Global actions
// ==================



export const HandleUsers = (state, users) => ({
  ...state,
  users
})


// Ajoute un message a la liste de messages
export const HandleNewMessage = (state, message) => ({
  ...state,
  messages: [message].concat(state.messages)
})

