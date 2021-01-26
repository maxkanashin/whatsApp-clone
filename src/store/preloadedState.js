import * as fs from 'fs'
import uuid from 'react-uuid'
import faker from 'faker'
import {
  DefaultReducerState as DefaultUsersListState,
  UsersListModel
} from '../reducer/usersList'
import {
  DefaultReducerState as DefaultMessagesListState,
  ChatListModel,
  MessagesListModel
} from '../reducer/chatList.js'

let odata = {}

try {
  let usersListMap = new DefaultUsersListState()
  let messagesListMap = new DefaultMessagesListState()

  for (let i = 0; i < 15; i++) {
    let usersList = new UsersListModel({
      id: uuid(),
      userName: faker.name.findName(),
      imgAvatar: `${faker.image.people()}?random=${i + 10}`
    })
    usersListMap = usersListMap.setIn(['entities', usersList.id], usersList)

    let chatList = new ChatListModel({
      id: uuid(),
      userId: usersList.id
    })
    for (let j = 0; j < 20; j++) {
      let messages = new MessagesListModel({
        author: usersList.id,
        date: '22:44',
        message: faker.lorem.sentence(5)
      })
      chatList = chatList.set('messages', [...chatList.messages, messages])
    }
    messagesListMap = messagesListMap.setIn(['entities', chatList.id], chatList)
  }
  odata.usersList = usersListMap
  odata.chatList = messagesListMap
} catch (e) {
  console.log('error', e)
  odata = {}
}

export default odata