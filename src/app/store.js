import { configureStore } from '@reduxjs/toolkit'
import { AddItemsReducer, ordersReducer } from '../feature/restaurant/RestaurantHomeSlice'
import { menuItemsApi } from '../firebase/firebaseRTKquery'

export const store = configureStore({
  reducer: {
    AddItems: AddItemsReducer,
    Orders: ordersReducer,
    [menuItemsApi.reducerPath]: menuItemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuItemsApi.middleware),
})