import {h} from 'hyperapp'

// Import styles
import 'spectre.css'

// Import actions
import {addMessage, setInputVal} from './actions'



// Root view
export const view = state => (
  <div class="app">
    <div class="container">
      <div class="columns">
        <div class="column col-3">
          <ul class="menu">
            <li class="divider" data-content="Rooms"></li>
            {state.rooms.map(room => (
              <li class="menu-item"><a href="#">{room.title}</a></li>
            ))}
          </ul>
        </div>
        <div class="column col-9">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title h6">Comments</div>
            </div>
            <div class="panel-body">

            {state.messages.map(message => (
              <div class="tile">
                <div class="tile-icon">
                  <figure class="avatar"><img src="../img/avatar-1.png" alt="Avatar" /></figure>
                </div>
                <div class="tile-content">
                  <p class="tile-title text-bold">{message.user}</p>
                  <p class="tile-subtitle">{message.content}</p>
                </div>
              </div>
            ))}
              


            </div>
            <div class="panel-footer">
              <div class="input-group">
                <input class="form-input" type="text" value={state.inputVal} oninput={setInputVal} placeholder="Hello" />
                <button class="btn btn-primary input-group-btn" onclick={addMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

  </div>
)
