
export const HandleLoginForm = (state, ev) => {
  ev.preventDefault()
  return {
    ...state,
    userName: state.nameInput
  }
}

export const SetNameInput = (state, ev) => ({
  ...state,
  nameInput: ev.target.value
})