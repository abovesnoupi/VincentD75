import {h} from 'hyperapp'

import {Logout} from '../../actions'

import {JoinRoom, SetInputVal, HandleMessageForm, HandleRoomForm, SetRoomFormInput, OpenRoomForm} from './actions'

import './style.css'

const scrollDown = el => el.scrollTop = el.scrollHeight

const getOneToOneRoomName = (a, b) => [a, b].sort().join(' - ')

export const ChatScreen = ({state}) => (
  <div class="container chat-screen">
    <div class="columns">
      <div class="column col-3">
        <ul class="menu">
        
          <li class="menu-item">
            <div class="tile tile-centered">
              <div class="tile-icon"><img class="avatar" src={state.avatar} alt="Avatar" /></div>
              <div class="tile-content h6">{state.userName}</div>
            </div>
          </li>

          <li class="divider" data-content="Rooms"></li>
          {state.rooms.map(room => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, room._id]}>{room.title}</a></li>
          ))}

          {state.roomFormIsOpened ? (
            <form onsubmit={HandleRoomForm}>
              <div class="form-group">
                <label class="form-label" for="roomFormInput">Room name</label>
                <input
                  id="roomFormInput"
                  name="roomFormInput"
                  placeholder="Enter new room name"
                  class="form-input"
                  type="text"
                  value={state.roomFormInput}
                  oninput={SetRoomFormInput}
                  required
                />
              </div>
              <button class="btn btn-primary input-group-btn" type="submit">Send</button>
            </form>
          ) : (
            <button onclick={OpenRoomForm} class="btn btn-primary">Ajouter un salle</button>
          )}


          <li class="divider" data-content="Users"></li>
          {state.users
            .filter(user => user.userName !== state.userName)
            .map(user => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, getOneToOneRoomName(user.userName, state.userName)]}>{user.userName}</a></li>
          ))}
          <li class="divider" data-content="Other"></li>
          <li class="menu-item"><a target="_blank" href="https://github.com/jorgebucaran/hyperapp" >Hyperapp</a></li>
          <li class="menu-item"><a target="_blank" href="https://picturepan2.github.io/spectre/" >Specte.css</a></li>
          <li class="menu-item"><a target="_blank" href="https://socket.io/" >Socket.io</a></li>
          <li class="menu-item"><a target="_blank" href="http://couchdb.apache.org/" >CouchDB</a></li>

          <li class="divider"></li>
          <li class="menu-item"><a href="#" onclick={Logout}>Logout</a></li>

        </ul>
      </div>
      <div class="column col-9">
        {state.currentRoom ? (
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title h4">{state.currentRoom}</div>
            </div>
            <div class="scroller" onCreate={scrollDown} onUpdate={scrollDown}>
              <div class="panel-body">
                {state.messages.map(message => (
                  <div class="tile">
                    <div class="tile-icon">
                      <figure class="avatar">
                        <img src={message.user.avatar} alt="Avatar"/>
                      </figure>
                    </div>
                    <div class="tile-content">
                      <p class="tile-title text-bold">{message.user.userName}</p>
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
                    placeholder="Écrire..."
                    class="form-input"
                    type="text"
                    value={state.inputVal}
                    oninput={SetInputVal}
                    required
                  />
                  <button class="btn btn-primary input-group-btn" type="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div class="empty">
            <div class="empty-icon"><i class="icon icon-3x icon-message"></i></div>
            <p class="empty-title h5">Choisissez une salle</p>
            <p class="empty-subtitle">Cliquez à gauche de l'écran pour vous rejoindre à une salle.</p>
          </div>
        )}
      </div>
    </div>
    
    <button class="btn btn-primary" onclick={(state => ({...state, showState: !state.showState}))}>ToggleState</button>
    {state.showState && <pre class="code" data-lang="JSON"><code>{JSON.stringify(state, null, 2)}</code></pre>}
  {/* Fin container */}
  </div>
)