
import {Socket} from '../../../utils'

import {HandleMessages} from '../../actions'

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



export const SetInputVal = (state, ev) => ({
  ...state,
  inputVal: ev.target.value
})



export const HandleMessageForm = (state, ev) => {
  ev.preventDefault()
  return [
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
}
