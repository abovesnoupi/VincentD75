
import {Socket} from '../../../utils'

export const OpenRoomForm = (state) => ({
  ...state,
  roomFormIsOpened: true
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
