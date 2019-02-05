import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import messages from './messages'
import users from './users'

export const rootReducer = combineReducers({
  form: formReducer,
  messages,
  users
});