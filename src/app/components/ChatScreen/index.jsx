import {h} from 'hyperapp'

import {JoinRoom, SetInputVal, HandleMessageForm} from './actions'

import './style.css'

const scrollDown = el => el.scrollTop = el.scrollHeight

const getOneToOneRoomName = (a, b) => [a, b].sort().join('-')

export const ChatScreen = ({state}) => (
  <div class="container">
    <header class="navbar">
      <section class="navbar-section">
        <a href="#" class="navbar-brand mr-2">Spectre.css</a>
        <a href="#" class="btn btn-link">Docs</a>
        <a href="#" class="btn btn-link">GitHub</a>
      </section>
      
    </header>
    <div class="columns">
      <div class="column col-3">
        <h4>{state.userName}</h4>
        <ul class="menu">
          <li class="divider" data-content="Rooms"></li>
          {state.rooms.map(room => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, room._id]}>{room.title}</a></li>
          ))}
          <li class="divider" data-content="Users"></li>
          {state.users.map(user => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, getOneToOneRoomName(user.userName, state.userName)]}>{user.userName}</a></li>
          ))}
        </ul>
      </div>
      <div class="column col-9">
        {state.currentRoom ? (
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title h6">Room: {state.currentRoom}</div>
            </div>
            <div class="scroller" onCreate={scrollDown} onUpdate={scrollDown}>
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
            </div>
            <div class="panel-footer">
              <form onsubmit={HandleMessageForm}>
                <div class="input-group">
                  <input
                    placeholder="Type something..."
                    class="form-input"
                    type="text"
                    value={state.inputVal}
                    oninput={SetInputVal}
                  />
                  <button class="btn btn-primary input-group-btn" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <h2>Choisissez une salle à gauche de l'écran</h2>
        )}
      </div>
    </div>
  {/* Fin container */}
  </div>
)