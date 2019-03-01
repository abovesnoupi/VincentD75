import {h} from 'hyperapp'


import {SetInputVal, HandleMessageForm} from './actions'

import './style.css'

import {NavMenu} from '../NavMenu'

const scrollDown = el => el.scrollTop = el.scrollHeight

const getOneToOneRoomName = (a, b) => [a, b].sort().join(' - ')

export const ChatScreen = ({state}) => (
  <div class="container wrapper chat-screen">
    <div class="columns">
      <div class="column col-3 col-md-12">
        <NavMenu state={state} />
      </div>

      <div class="column col-9 col-md-12">
        {state.currentRoom ? (
          <div class="panel" key={state.currentRoom}>
            <div class="panel-header">
              <div class="panel-title h4">{state.currentRoom}</div>
            </div>
            <div class="scroller" onCreate={scrollDown} onUpdate={scrollDown}>
              <div class="panel-body">
                {state.messages.map(message => (
                  <div class="tile" key={message._id}>
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
    
    {/* State viewer */}
    {state.showState && <pre class="code" data-lang="App state"><code>{JSON.stringify(state, null, 2)}</code></pre>}

  </div>
)