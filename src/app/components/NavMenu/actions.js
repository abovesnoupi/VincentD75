
import {Socket} from '../../../utils'

import {HandleMessages} from '../../actions'

export const ToggleMenu = (state) => ({...state, menuOpened: !state.menuOpened})

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

