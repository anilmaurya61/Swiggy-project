import { configureStore } from '@reduxjs/toolkit';
import { AddItemsReducer, ordersReducer } from '../feature/restaurant/RestaurantHomeSlice';
import { menuItemsApi } from '../firebase/firebaseRTKquery';
import restaurantDetailsReducer from '../feature/restaurant/RestaurantDetailsSlice';
import { RestaurantsApi } from '../firebase/firebaseRTKqueryRestaurants';

export const store = configureStore({
  reducer: {
    AddItems: AddItemsReducer,
    Orders: ordersReducer,
    restaurantDetails: restaurantDetailsReducer,
    [menuItemsApi.reducerPath]: menuItemsApi.reducer,
    [RestaurantsApi.reducerPath]: RestaurantsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuItemsApi.middleware, RestaurantsApi.middleware), 
});
