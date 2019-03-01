
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


