import {h} from 'hyperapp'

import {Logout} from '../../actions'

import {JoinRoom, SetInputVal, HandleMessageForm, HandleRoomForm, SetRoomFormInput, OpenRoomForm} from './actions'

import './style.css'

const scrollDown = el => el.scrollTop = el.scrollHeight

const getOneToOneRoomName = (a, b) => [a, b].sort().join('-')

export const ChatScreen = ({state}) => (
  <div class="container">
    <div class="columns">
      <div class="column col-3">
        <h4>{state.userName}</h4>
        <a href="#" onclick={Logout}>Logout</a>
        <ul class="menu">
          <li class="divider" data-content="Rooms"></li>
          {state.rooms.map(room => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, room._id]}>{room.title}</a></li>
          ))}
          {state.roomFormIsOpened ? (
            <form onsubmit={HandleRoomForm}>
              <input
                placeholder="Enter new room name"
                class="form-input"
                type="text"
                value={state.roomFormInput}
                oninput={SetRoomFormInput}
                required
              />
              <button class="btn btn-primary input-group-btn" type="submit">Send</button>
            </form>
          ) : (
            <button onclick={OpenRoomForm} class="btn btn-primary">Ajouter un salle</button>
          )}
          <li class="divider" data-content="Users"></li>
          {state.users
            // .filter(user => user.userName !== state.userName)
            // .filter(user => user.userName)
            .map(user => (
            <li class="menu-item"><a href="#" onclick={[JoinRoom, getOneToOneRoomName(user.userName, state.userName)]}>{user.userName}</a></li>
          ))}
          <li class="divider" data-content="Other"></li>
            <li class="menu-item"><a target="_blank" href="https://github.com/jorgebucaran/hyperapp" >Hyperapp</a></li>
            <li class="menu-item"><a target="_blank" href="https://picturepan2.github.io/spectre/" >Specte.css</a></li>
            <li class="menu-item"><a target="_blank" href="https://socket.io/" >Socket.io</a></li>
            <li class="menu-item"><a target="_blank" href="http://couchdb.apache.org/" >CouchDB</a></li>
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