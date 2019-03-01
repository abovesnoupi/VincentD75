
import {Socket} from '../utils'

import {HandleRooms, HandleUsers, HandleNewMessage} from './actions'

export const subscriptions = (state) => {
  console.log(state)
  return [
    Socket.on({
      event: 'send users',
      action: HandleUsers
    }),
    Socket.on({
      event: 'send rooms',
      action: HandleRooms
    }),
    Socket.on({
      event: 'new message',
      action: HandleNewMessage
    })
  ]
}
