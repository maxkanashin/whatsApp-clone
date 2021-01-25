import { SET_ACTIVE_ID } from '../constants'

export function setActiveId(activeId) {
  return {
    type: SET_ACTIVE_ID,
    payload: { activeId }
  }
}
