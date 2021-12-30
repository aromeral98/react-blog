import {
  ADD_EVENT_PRODUCTS_LIKED,
  SET_EVENT,
  SET_EVENT_PRODUCTS,
  SET_EVENT_PRODUCTS_LIKED
} from '../actionsTypes/EventActionTypes'

export function setEvent (payload) {
  return { type: SET_EVENT, payload }
};
export function setEventProducts (payload) {
  return { type: SET_EVENT_PRODUCTS, payload }
};
export function addEventProductLiked (payload) {
  return { type: ADD_EVENT_PRODUCTS_LIKED, payload }
};
export function setEventProductLiked (payload) {
  return { type: SET_EVENT_PRODUCTS_LIKED, payload }
};
