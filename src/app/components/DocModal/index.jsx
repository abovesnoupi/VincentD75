import {h} from 'hyperapp'

import './style.css'

import {ToggleDocModal} from './actions'

export const DocModal = ({state}) => (
  <div class="doc-modal modal active">
    <div class="modal-container" role="document">
      <div class="modal-header">
        <a class="btn btn-clear float-right" href="#" onclick={ToggleDocModal}></a>
        <div class="modal-title h5">Create room</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <h1>Lorem ipsum</h1>
          <p>LALALAL</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary input-group-btn" type="button" onclick={ToggleDocModal}>C'est compris!</button>
      </div>
    </div>
  </div>
)