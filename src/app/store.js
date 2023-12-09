import { configureStore } from '@reduxjs/toolkit'
import {AddItemsReducer, ordersReducer} from '../feature/restaurant/RestaurantHomeSlice'
import  restaurantDetailsReducer  from '../feature/restaurant/RestaurantDetailsSlice'
export const store = configureStore({
  reducer: {
    AddItems:AddItemsReducer,
    Orders:ordersReducer,
    restaurantDetails: restaurantDetailsReducer,
  },

})