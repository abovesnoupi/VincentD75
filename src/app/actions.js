// ==================
// Global actions
// ==================

// Sets the a value to the given key in the state
export const SetValue = (state, key, ev) => ({
  ...state,
  [key]: ev.target.value
})


export const add = state => ({
  ...state,
  count:  state.count + 1,
})


export const remove = state => ({
  ...state,
  count:  state.count - 1
})

export const addMessage = state => ({
  ...state,
  inputVal: '',
  messages: state.messages.concat({
    id:445,
    user:"tony asdsadmarde",
    content:state.inputVal
  })
})


export const setInputVal = (state, ev) => ({
  ...state,
  inputVal: ev.target.value
})