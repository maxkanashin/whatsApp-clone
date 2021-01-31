import { OPEN_ABOUT_CONTACT, CLOSE_ABOUT_CONTACT } from '../constants'

export function openAboutContact() {
  return {
    type: OPEN_ABOUT_CONTACT,
    payload: { openContact: true }
  }
}

export function closeAboutContact() {
  return {
    type: CLOSE_ABOUT_CONTACT,
    payload: { openContact: false }
  }
}
