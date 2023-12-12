import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux'; 
import { AddItemsReducer, ordersReducer } from '../feature/restaurant/RestaurantHomeSlice';
import { menuItemsApi } from '../firebase/firebaseRTKquery';
import restaurantDetailsReducer from '../feature/restaurant/RestaurantDetailsSlice';
import { RestaurantsApi } from '../firebase/firebaseRTKqueryRestaurants';
import cartReducer from '../feature/consumer/CartSlice';
import { addressesApi } from '../firebase/getAddressRTKquery';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const rootReducer = combineReducers({
  AddItems: AddItemsReducer,
  Orders: ordersReducer,
  restaurantDetails: restaurantDetailsReducer,
  [menuItemsApi.reducerPath]: menuItemsApi.reducer,
  [RestaurantsApi.reducerPath]: RestaurantsApi.reducer,
  [addressesApi.reducerPath]: addressesApi.reducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuItemsApi.middleware, RestaurantsApi.middleware, addressesApi.middleware),
});

export const persistor = persistStore(store);
