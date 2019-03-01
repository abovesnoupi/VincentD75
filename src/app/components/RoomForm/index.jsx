import {h} from 'hyperapp'

import './style.css'

import {HandleRoomForm, SetRoomFormInput} from './actions'

export const RoomForm = ({state}) => (
  <form onsubmit={HandleRoomForm} class="room-form">
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
)