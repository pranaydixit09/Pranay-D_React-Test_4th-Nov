import { FETCH_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    products: [], // Store 
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, products: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;