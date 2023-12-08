import { configureStore } from '@reduxjs/toolkit'
import {AddItemsReducer, ordersReducer} from '../feature/restaurant/RestaurantHomeSlice'

export const store = configureStore({
  reducer: {
    AddItems:AddItemsReducer,
    Orders:ordersReducer,
  },
})