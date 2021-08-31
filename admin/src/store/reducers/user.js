const INITIAL_STATE = {
  logged: false,
  email: '',
  name: ''
}
const UserReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'USER') {
    return {
      ...state,
      logged: action.logged,
      email: action.email,
      name: action.name
    }
  }
  return state
}

export default UserReducer
