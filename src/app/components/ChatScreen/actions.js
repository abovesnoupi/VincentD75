
import {Socket} from '../../../utils'


export const JoinRoom = (state, roomId) => [
  {
    ...state,
    currentRoom: roomId,
    menuOpened: false
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

export const HandleMessages = (state, messages) => ({
  ...state,
  messages
})


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
          user: {
            userName: state.userName,
            avatar: state.avatar
          },
          text: state.inputVal
        }
      }
    })
  ]
}


