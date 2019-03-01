
import {Socket} from '../../../utils'

import {HandleRooms} from '../../actions'


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
