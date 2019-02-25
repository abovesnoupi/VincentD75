
import io from 'socket.io-client/dist/socket.io.slim'

const socket = io.connect('//' + window.location.hostname + ':42069');



// Socket.io baggy (subs & effects builders)
export const Socket = {

  emit: (props) => ({
    effect: (props, dispatch) => {
      socket.emit(props.event, props.data, res => dispatch(props.action, res))
    },
    event: props.event,
    data: props.data,
    action: props.action
  }),

  // Listen to location changes
  on: props => ({
    effect: (props, dispatch) => {
      socket.on(props.event, data => {
        dispatch(props.action, data)
      })
      return () => socket.off(props.event)
    },
    event: props.event,
    action: props.action
  })
}
