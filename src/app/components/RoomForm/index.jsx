import {h} from 'hyperapp'

import './style.css'

import {HandleRoomForm, SetRoomFormInput, ToggleRoomForm} from './actions'

export const RoomForm = ({state}) => (
  <div class="room-form modal modal-sm active">
    <form onsubmit={HandleRoomForm} class="modal-container" role="document">
      <div class="modal-header">
        <a class="btn btn-clear float-right" href="#" onclick={ToggleRoomForm}></a>
        <div class="modal-title h5">Create room</div>
      </div>
      <div class="modal-body">
        <div class="content">
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
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary input-group-btn" type="submit">Send</button>
        <a class="btn btn-link" href="#" onclick={ToggleRoomForm}>Close</a>
      </div>
    </form>
  </div>
)