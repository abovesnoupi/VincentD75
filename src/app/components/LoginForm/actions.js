
import {Socket} from '../../../utils'


export const SetNameInput = (state, ev) => ({
  ...state,
  nameInput: ev.target.value
})

export const HandleLoginForm = (state, ev) => {
  ev.preventDefault()
  return [
    {
      ...state,
      userName: state.nameInput
    },
    Socket.emit({
      event: 'login',
      data: state.nameInput,
      action: HandleRooms
    })
  ]
}

// Insert les salles dans le state
export const HandleRooms = (state, rooms) => ({
  ...state,
  rooms
})
