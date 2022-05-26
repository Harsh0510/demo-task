import { TOGGLE_CART, ADD_TO_CART, REMOVE_CART } from "./CartType";

export function toggle_cart() {
  return {
    type: TOGGLE_CART,
  };
}

export function addTOCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}

export function removeCart(id) {
  return {
    type: REMOVE_CART,
    payload: id,
  };
}
