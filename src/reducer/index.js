import { combineReducers } from 'redux'
import activeId from './activeId'
import usersList from './usersList'
import chatList from './chatList'
import openContact from './openContact'

export default combineReducers({ activeId, openContact, usersList, chatList })
