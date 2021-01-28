import { SET_MESSAGE } from '../constants'

export function setMessage(message, userId, date) {
  return {
    type: SET_MESSAGE,
    payload: { message, userId, date }
  }
}
