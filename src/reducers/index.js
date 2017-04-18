import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Admin from './instances/admin'
import Insurance from './instances/insurances'
import Notice from './instances/notice'

import { reducer as formReducer } from 'redux-form'
/**
 * Reducers
 */
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  admin: Admin,
  insurances: Insurance,
  notice: Notice
})