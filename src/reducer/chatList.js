import { OrderedMap, Record } from 'immutable'
import { SET_MESSAGE, MY_UUID } from '../constants'

export const ChatListModel = Record({
  id: null,
  userId: null,
  messages: OrderedMap({})
})

export const MessagesListModel = Record({
  author: '',
  date: '',
  message: ''
})

export const DefaultReducerState = Record({
  entities: OrderedMap({})
})

const chatList = (chatList = new DefaultReducerState(), action) => {
  const { type, payload } = action

  switch (type) {
    case SET_MESSAGE:
      const chat = chatList.entities.find(
        (obj) => obj.get('userId') === payload.userId
      )

      let messageList = new MessagesListModel({
        author: MY_UUID,
        date: payload.date,
        message: payload.message
      })
      return chatList.setIn(
        ['entities', chat.id, 'messages'],
        [...chat.messages, messageList]
      )
    default:
      return chatList
  }
}

export default chatList
