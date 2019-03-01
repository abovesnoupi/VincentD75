// ==================
// Global actions
// ==================
import {Socket} from '../utils'

// Insert les salles dans le state
export const HandleRooms = (state, rooms) => {
  // console.log(rooms)
  return {
    ...state,
    rooms: rooms.rows.map(row => row.value)
  }
}

// Insert les messages dans le state
export const HandleMessages = (state, messages) => ({
  ...state,
  messages: messages.docs
})

// Ajoute un message a la liste de messages
export const HandleNewMessage = (state, message) => ({
  ...state,
  messages: [message].concat(state.messages)
})

