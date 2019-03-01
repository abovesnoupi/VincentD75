import {h} from 'hyperapp'

export const LoginForm = ({state}) => (
    <form
    class="login-form"
    onsubmit={HandleLoginForm}
  > 
    <h2>Veuillez choisir un nom</h2>
    <input
      placeholder="Entrez votre nom..."
      class="form-input"
      type="text"
      value={state.nameInput}
      oninput={SetNameInput}
    />
    <button class="btn btn-primary input-group-btn" type="submit">OK</button>
  </form>
)