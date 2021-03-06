// Initial state of the app

import {Login} from './components/LoginForm/actions'

const savedUsername = window.localStorage.getItem('vincentd75-username')

const initState = {
  
  nameInput: '',

  userName: '',
  avatar: '',

  roomFormIsOpened: false,
  roomFormInput: '',

  docModalIsOpened: false,

  currentRoom: '',

  inputVal: '',

  rooms: [],
  messages: [],
  users: [],

  menuOpened: false,
  showState: false
}

export const init = savedUsername ? Login(initState, savedUsername) : initState