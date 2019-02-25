// ==================
// Global actions
// ==================
import {Socket} from '../utils'
import nanoid from 'nanoid'

// Insert les salles dans le state
export const HandleRooms = (state, rooms) => {
  console.log(rooms)
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


export const addMessage = state => {
  const message = {
    id: nanoid(),
    user: 'MON NOM',
    content: state.inputVal
  }
  return [
    {
      ...state,
      inputVal: '',
      messages: state.messages.concat(message)
    },
    Socket.emit({
      event: 'new message',
      data: message
    })
  ]
}

export const setInputVal = (state, ev) => ({
  ...state,
  inputVal: ev.target.value
})