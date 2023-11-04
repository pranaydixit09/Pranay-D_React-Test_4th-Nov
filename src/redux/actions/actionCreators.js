import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const fetchProducts = (products) => {
    return {
      type: FETCH_PRODUCTS,
      payload: products,
    };
  };


  export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: itemId,
    };
  };