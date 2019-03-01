import {app} from '../hyperapp'
import {init} from './app/init'
import {view} from './app/view'
import {subscriptions} from './app/subscriptions'

// Initialize the app
app({
  init,
  view,
  subscriptions,
  container: document.body
})
