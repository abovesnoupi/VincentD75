// ==================
// Global actions
// ==================
import {Socket} from '../utils'
import nanoid from 'nanoid'

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