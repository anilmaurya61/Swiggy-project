import { configureStore } from '@reduxjs/toolkit'
import { AddItemsReducer, ordersReducer } from '../feature/restaurant/RestaurantHomeSlice'
import { menuItemsApi } from '../firebase/firebaseRTKquery'
import  restaurantDetailsReducer  from '../feature/restaurant/RestaurantDetailsSlice'

export const store = configureStore({
  reducer: {
    AddItems: AddItemsReducer,
    Orders: ordersReducer,
    restaurantDetails: restaurantDetailsReducer,
    [menuItemsApi.reducerPath]: menuItemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuItemsApi.middleware),

})