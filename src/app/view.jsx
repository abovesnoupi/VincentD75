import {h} from 'hyperapp'

// Import styles
import 'spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import './style.css'

// Import components
import {LoginForm} from './components/LoginForm'
import {ChatScreen} from './components/ChatScreen'

// Root view
export const view = state => (
  <div class="app" menuOpened={state.menuOpened}>
    <div class="hero container hero-sm">
      <div class="wrapper hero-body">
        <h1>Messagerie en temps réelle</h1>
        <p>Hyperapp, Socket.io, CouchDB et Specte.css</p>
      </div>
    </div>
    {
      state.userName
      ? <ChatScreen state={state} />
      : <LoginForm state={state} />
    }
  </div>
)
