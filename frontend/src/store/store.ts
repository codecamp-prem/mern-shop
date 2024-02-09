import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
