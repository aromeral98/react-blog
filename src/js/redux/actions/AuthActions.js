import {
  LOGIN,
  REGISTER
} from '../actionsTypes/AuthActionTypes'

export function setUser (payload) {
  return { type: LOGIN, payload }
};
export function createUser (payload) {
  return { type: REGISTER, payload }
};
