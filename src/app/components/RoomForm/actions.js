
import {Socket} from '../../../utils'

export const ToggleRoomForm = (state) => ({
  ...state,
  roomFormIsOpened: !state.roomFormIsOpened
})

export const SetRoomFormInput = (state, ev) => ({
  ...state,
  roomFormInput: ev.target.value
})

export const HandleRoomForm = (state, ev) => {
  ev.preventDefault()
  return [
    {
      ...state,
      roomFormIsOpened: false,
      roomFormInput: ''
    },
    Socket.emit({
      event: 'new room',
      data: state.roomFormInput
    })
  ]
}
