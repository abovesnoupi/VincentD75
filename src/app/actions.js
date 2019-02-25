// ==================
// Global actions
// ==================
import {Socket} from '../utils'
import nanoid from 'nanoid'

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
  messages
})

// Ajoute un message a la liste de messages
export const HandleNewMessage = (state, message) => ({
  ...state,
  messages: state.messages.concat(message)
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
        id: nanoid(),
        user: 'MON NOM',
        content: state.inputVal
      }
    }
  })
]


export const setInputVal = (state, ev) => ({
  ...state,
  inputVal: ev.target.value
})


export const JoinRoom = (state, roomId) => [
  state,
  Socket.emit({
    event: 'switch room',
    data: {
      roomToJoin: roomId,
      roomToLeave: state.currentRoom
    }
  })
]
