export const ADD_TO_CART = "[PRODUCT] ADD_TO_CARD";
export const REMOVE_FROM_CART = "[PRODUCT] REMOVE_FROM_CART";
export const CLEAR_CART="CLEAR_CART";
export const DECREMENT_CART="[PRODUCT] DECREMENT_CART";
export const INCREMENT_CART ="[PRODUCT] INCREMENT_CART";

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product };
}

export function clearCart() {
  return { type: CLEAR_CART};
}

export function decrementCart(product) {
  return { type: DECREMENT_CART, payload: product };
}

export function incrementCart(product) {
  return { type: INCREMENT_CART, payload: product };
}