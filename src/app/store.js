import { configureStore } from '@reduxjs/toolkit'
import {AddItemsReducer} from '../feature/restaurant/RestaurantHomeSlice'

export const store = configureStore({
  reducer: {
    AddItems:AddItemsReducer,
  },
})