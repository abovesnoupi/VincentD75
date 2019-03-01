import {h} from 'hyperapp'

import './style.css'

import {JoinRoom, ToggleMenu} from './actions'

import {ToggleState, Logout} from '../../actions'

import {ToggleRoomForm} from '../RoomForm/actions'

export const NavMenu = ({state}) => [
  <button class="menu-btn btn btn-primary" onclick={ToggleMenu}><i class="icon icon-menu"></i></button>,
  <ul class="menu side-menu">
  
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

    <li class="divider" data-content="Users"></li>
    {state.users
      .filter(user => user.userName !== state.userName)
      .filter(user => user.userName)
      .map(user => (
      <li class="menu-item">
        <a href="#" onclick={[JoinRoom, getOneToOneRoomName(user.userName, state.userName)]}>
          <div class="tile tile-centered">
            <div class="tile-icon"><img class="avatar" src={user.avatar} alt="Avatar" /></div>
            <div class="tile-content h6">{user.userName}</div>
          </div>
        </a>
      </li>
    ))}
    <li class="divider" data-content="Other"></li>
    <li class="menu-item"><a target="_blank" href="https://github.com/jorgebucaran/hyperapp" >Hyperapp</a></li>
    <li class="menu-item"><a target="_blank" href="https://picturepan2.github.io/spectre/" >Specte.css</a></li>
    <li class="menu-item"><a target="_blank" href="https://socket.io/" >Socket.io</a></li>
    <li class="menu-item"><a target="_blank" href="http://couchdb.apache.org/" >CouchDB</a></li>

    <li class="divider"></li>
    <li class="menu-item"><a href="#" onclick={ToggleRoomForm}>Ajouter un salle</a></li>
    <li class="menu-item"><a href="#" onclick={ToggleState}>Show State</a></li>
    <li class="menu-item"><a href="#" onclick={Logout}>Logout</a></li>

  </ul>,
  <div class="overlay" onclick={ToggleMenu}></div>
]
