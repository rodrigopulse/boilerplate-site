import { combineReducers } from 'redux'

import AlertReducer from './alert'
import UserReducer from './user'

export default combineReducers({
  AlertReducer,
  UserReducer
})
