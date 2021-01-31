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
import { MY_UUID } from '../constants'

let odata = {}

try {
  let usersListMap = new DefaultUsersListState()
  let messagesListMap = new DefaultMessagesListState()

  for (let i = 0; i < 15; i++) {
    let usersList = new UsersListModel({
      id: uuid(),
      userName: faker.name.findName(),
      imgAvatar: `${faker.image.people()}?random=${i + 10}`,
      phoneNum: faker.phone.phoneNumberFormat(2)
    })
    usersListMap = usersListMap.setIn(['entities', usersList.id], usersList)

    let chatList = new ChatListModel({
      id: uuid(),
      userId: usersList.id
    })
    for (let j = 0; j < 20; j++) {
      let messages = new MessagesListModel({
        author:
          Math.floor(Math.random() * Math.floor(2)) === 1
            ? usersList.id
            : MY_UUID,
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
