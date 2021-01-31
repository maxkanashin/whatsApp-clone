import {
  OPEN_ABOUT_CONTACT,
  CLOSE_ABOUT_CONTACT,
  SET_ACTIVE_ID
} from '../constants'

const openContact = (openContact = false, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_ABOUT_CONTACT:
    case CLOSE_ABOUT_CONTACT:
      return payload.openContact
    case SET_ACTIVE_ID:
      return false
    default:
      return openContact
  }
}

export default openContact
