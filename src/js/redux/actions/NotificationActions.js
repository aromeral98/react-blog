import {
  ADD_NOTIFICATION,
  RESET_NOTIFICATION,
  RESET_POPUP_NOTIFICATION,
  LIST_NOTIFICATION
} from '../actionsTypes/NotificationActionTypes'
export function listNotification (payload) {
  return { type: LIST_NOTIFICATION, payload }
}
export function addNotification (payload) {
  return { type: ADD_NOTIFICATION, payload }
};
export function resetNotification (payload) {
  return { type: RESET_NOTIFICATION, payload }
};
export function resetPopUpNotification (payload) {
  return { type: RESET_POPUP_NOTIFICATION, payload }
};
