import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

import checkoutFormReducer from '../features/checkout/checkoutFormSlice';

const store = configureStore({
  reducer: {
    checkoutForm: checkoutFormReducer,
    cart: cartReducer,
  },
});


export default store;