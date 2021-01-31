import { OrderedMap, Record } from 'immutable'

export const UsersListModel = Record({
  id: null,
  imgAvatar: '',
  userName: '',
  online: 'Был(-а) сегодня в 00:01',
  phoneNum: ''
})

export const DefaultReducerState = Record({
  entities: OrderedMap({})
})

const usersList = (usersList = new DefaultReducerState(), action) => {
  return usersList
}

export default usersList
