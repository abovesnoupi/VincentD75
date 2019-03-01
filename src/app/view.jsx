import {h} from 'hyperapp'

// Import styles
import 'spectre.css'
import './style.css'

// Import components
import {LoginForm} from './components/LoginForm'
import {ChatScreen} from './components/ChatScreen'

// Root view
export const view = state => (
  <div class="app">
    {
      state.userName
      ? <ChatScreen state={state} />
      : <LoginForm state={state} />
    }
    <button class="btn btn-primary" onclick={(state => ({...state, showState: !state.showState}))}>ToggleState</button>
    {state.showState && <pre class="code" data-lang="JSON"><code>{JSON.stringify(state, null, 2)}</code></pre>}
  </div>
)
