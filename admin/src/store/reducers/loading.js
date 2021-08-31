const INITIAL_STATE = {
  show: false
}
const LoadingReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      show: action.show
    }
  }
  return state
}

export default LoadingReducer
