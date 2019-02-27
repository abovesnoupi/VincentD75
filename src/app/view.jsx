import {h} from 'hyperapp'

// Import styles
import 'spectre.css'
import './style.css'

// Import actions
import {addMessage, setInputVal, JoinRoom, SetNameInput, SetUsername} from './actions'



// Root view
export const view = state => (
  <div class="app">
    {state.userName ? (
      <div class="container">
        <header class="navbar">
          <section class="navbar-section">
            <a href="#" class="navbar-brand mr-2">Spectre.css</a>
            <a href="#" class="btn btn-link">Docs</a>
            <a href="#" class="btn btn-link">GitHub</a>
          </section>
          <section class="navbar-section">
            <div class="input-group input-inline">
            <input class="form-input" type="text" placeholder="search"/>
            <button class="btn btn-primary input-group-btn">Search</button>
          </div>
          </section>
        </header>
        <div class="columns">
          <div class="column col-3">
            <ul class="menu">
              <li class="divider" data-content="Rooms"></li>
              {state.rooms.map(room => (
                <li class="menu-item"><a href="#" onclick={[JoinRoom, room._id]}>{room.title}</a></li>
              ))}
            </ul>
          </div>
          <div class="column col-9">
            <div class="panel">
              <div class="panel-header">
                <div class="panel-title h6">Room: {state.currentRoom}</div>
              </div>
              <div class="panel-body">

              {state.messages.map(message => (
                <div class="tile">
                  <div class="tile-icon">
                    <figure class="avatar">
                    </figure>
                  </div>
                  <div class="tile-content">
                    <p class="tile-title text-bold">{message.user}</p>
                    <p class="tile-subtitle">{message.text}</p>
                  </div>
                </div>
              ))}
                
              </div>
              <div class="panel-footer">
                <div class="input-group"><form onSubmit=""></form>
                  <input class="form-input" type="text" value={state.inputVal} oninput={setInputVal} placeholder="Hello" />
                  <button class="btn btn-primary input-group-btn" onclick={addMessage}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Fin container */}
      </div>
    ) : (
      <div class="loginForm"> 
        <h2>Veuillez choisir un nom</h2>
        <input class="form-input" type="text" value={state.nameInput} oninput={SetNameInput} placeholder="Pick a name" />
        <button class="btn btn-primary input-group-btn" onclick={SetUsername}>OK</button>
      </div>
    )}
    

    
    {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

  </div>
)
