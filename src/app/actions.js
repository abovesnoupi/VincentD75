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


export const addMessage = state => [
  {
    ...state,
    inputVal: ''
  },
  Socket.emit({
    event: 'new message',
    data: {
      roomId: state.currentRoom,
      message: {
        user: state.userName,
        text: state.inputVal
      }
    }
  })
]


export const setInputVal = (state, ev) => ({
  ...state,
  inputVal: ev.target.value
})


export const JoinRoom = (state, roomId) => [
  {
    ...state,
    currentRoom: roomId
  },
  Socket.emit({
    event: 'switch room',
    data: {
      roomToJoin: roomId,
      roomToLeave: state.currentRoom
    },
    action: HandleMessages
  })
]
