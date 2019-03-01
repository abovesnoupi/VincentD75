
import {Socket} from '../../../utils'

import {HandleRooms} from '../../actions'


export const SetNameInput = (state, ev) => ({
  ...state,
  nameInput: ev.target.value
})

export const HandleLoginForm = (state, ev) => {
  ev.preventDefault()
  window.localStorage.setItem('vincentd75-username', state.nameInput)
  return Login(state, state.nameInput)
}

export const Login = (state, userName) => [
  {
    ...state,
    nameInput: '',
    userName
  },
  Socket.emit({
    event: 'login',
    data: userName,
    action: HandleRooms
  })
]
