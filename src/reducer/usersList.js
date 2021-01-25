import { OrderedMap, Record } from 'immutable'

export const UsersListModel = Record({
  id: null,
  imgAvatar: '',
  userName: '',
  message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit!'
})

export const DefaultReducerState = Record({
  entities: OrderedMap({})
})

const usersList = (usersList = new DefaultReducerState(), action) => {
  return usersList
}

export default usersList
