import {app} from '../hyperapp'
import {init} from './app/init'
import {view} from './app/view'
import {HandleRooms, HandleUsers, HandleNewMessage} from './app/actions'

import {Socket} from './utils'

// Initialize the app
app({
  init,
  view,
  subscriptions: state => {
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
  },
  container: document.body
})
