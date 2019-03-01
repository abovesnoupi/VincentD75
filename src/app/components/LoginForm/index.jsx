import {h} from 'hyperapp'

import './style.css'

import {SetNameInput, HandleLoginForm} from './actions'

export const LoginForm = ({state}) => (
  <div class="wrapper container login-form">
    <form class="empty" onsubmit={HandleLoginForm}>
      <div class="empty-icon"><i class="icon icon-3x icon-people"></i></div>
      <p class="empty-title h5">Messagerie temps réelle</p>
      <p class="empty-subtitle">Veuillez choisir un nom</p>
      <div class="empty-action input-group input-inline">
        <input
          class="form-input"
          type="text"
          value={state.nameInput}
          oninput={SetNameInput}
          placeholder="Entrez votre nom..."
          required
        />
        <button class="btn btn-primary input-group-btn">Connection</button>
      </div>
    </form>
  </div>
)
