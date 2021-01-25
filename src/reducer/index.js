import { combineReducers } from 'redux'
import activeId from './activeId'
import usersList from './usersList'

export default combineReducers({ activeId, usersList })
