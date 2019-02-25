import {app} from '../hyperapp'
import {init} from './app/init'
import {view} from './app/view'
import {HandleNewMessage} from './app/actions'

import {Socket} from './utils'

// Initialize the app
app({
  init,
  view,
  subscriptions: state => [
    Socket.on({
      event: 'new message',
      action: HandleNewMessage
    })
  ],
  container: document.body
})
