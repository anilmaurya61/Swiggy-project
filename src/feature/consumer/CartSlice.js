import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [], 
    },
    reducers: {
      addItemToCart: (state, action) => {
        const newItem = action.payload;
  
        const existingItemIndex = state.items.findIndex(item => item.itemId === newItem.itemId);
  
        if (existingItemIndex !== -1) {
          state.items[existingItemIndex].count += 1;
        } else {
          state.items.push({ ...newItem, count: 1 });
        }
      },
      removeItemFromCart: (state, action) => {
        const itemIdToRemove = action.payload;
        const existingItemIndex = state.items.findIndex(item => item.itemId === itemIdToRemove);
  
        if (existingItemIndex !== -1) {
          if (state.items[existingItemIndex].count > 1) {
            state.items[existingItemIndex].count -= 1;
          } else {
            state.items = state.items.filter(item => item.itemId !== itemIdToRemove);
          }
        }
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });
  
  export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
  