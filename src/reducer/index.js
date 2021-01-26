import { combineReducers } from 'redux'
import activeId from './activeId'
import usersList from './usersList'
import chatList from './chatList'

export default combineReducers({ activeId, usersList, chatList })
