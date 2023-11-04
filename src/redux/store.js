import { combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer'

import { createStore } from 'redux';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;