import {h} from 'hyperapp'

// Import styles
import 'spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import './style.css'

// Import components
import {LoginForm} from './components/LoginForm'
import {ChatScreen} from './components/ChatScreen'
import {RoomForm} from './components/RoomForm'
import {DocModal} from './components/DocModal'

// Root view
export const view = state => (
  <div class="app" menuOpened={state.menuOpened}>
    <div class="hero container hero-sm">
      <div class="wrapper hero-body">
        <h1>Messagerie en temps réel</h1>
        <p>Hyperapp, Socket.io, CouchDB et Spectre.css</p>
      </div>
    </div>
    {
      state.userName
      ? <ChatScreen state={state} />
      : <LoginForm state={state} />
    }
    
    {state.roomFormIsOpened && <RoomForm state={state} />}
    {state.docModalIsOpened && <DocModal state={state} />}
  </div>
)
