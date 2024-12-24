// features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  totalQuantity: 0, // Total number of items in the cart
  totalAmount: 0, // Total cost of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log('actions',action)
        
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
        });
        
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
      console.log('state===',state.items);
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const item = state.items[itemIndex];

      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
      } else {
        state.items.splice(itemIndex, 1);
      }

      state.totalQuantity -= 1;
      state.totalAmount -= item.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
