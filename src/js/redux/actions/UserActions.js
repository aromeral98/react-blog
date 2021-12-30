import {
  SET_LANGUAGE_CODE,
  SET_USER
} from '../actionsTypes/UserActionTypes'

export function setUser (payload) {
  return { type: SET_USER, payload }
};
export function setUserLang (payload) {
  return { type: SET_LANGUAGE_CODE, payload }
};
