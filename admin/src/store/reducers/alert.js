const INITIAL_STATE = {
  show: false,
  alertType: 'danger',
  message: ''
}
const AlertReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'ALERT') {
    return {
      ...state,
      show: action.show,
      alertType: action.alertType,
      message: action.message
    }
  }
  return state
}

export default AlertReducer
