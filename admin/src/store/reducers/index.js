import { combineReducers } from 'redux'

import AlertReducer from './alert'
import UserReducer from './user'
import LoadingReducer from './loading'

export default combineReducers({
  AlertReducer,
  UserReducer,
  LoadingReducer
})
