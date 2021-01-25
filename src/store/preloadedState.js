import uuid from 'react-uuid'
import faker from 'faker'
import {
  DefaultReducerState as DefaultUsersListState,
  UsersListModel
} from '../reducer/usersList'

let odata = {}

try {
  let usersListMap = new DefaultUsersListState()

  for (let i = 0; i < 5; i++) {
    let usersList = new UsersListModel({
      id: uuid(),
      userName: faker.name.findName(),
      imgAvatar: `${faker.image.people()}?random=${i + 10}`
    })
    usersListMap = usersListMap.setIn(['entities', usersList.id], usersList)
  }
  odata.usersList = usersListMap
} catch (e) {
  console.log('error', e)
  odata = {}
}

export default odata
