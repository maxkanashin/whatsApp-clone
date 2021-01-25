import { SET_ACTIVE_ID } from '../constants'

const activeId = (activeId = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ACTIVE_ID:
      return payload.activeId
    default:
      return activeId
  }
}

export default activeId
