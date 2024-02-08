import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
