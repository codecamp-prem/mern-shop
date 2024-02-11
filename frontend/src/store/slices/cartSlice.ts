import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "{}")
  : { cartItems: [], shippingAddress: {}, PaymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: any) => x.id === item.id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x: any) => x.id !== action.payload
      );
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart, saveShippingAddress } =
  cartSlice.actions;
export default cartSlice.reducer;
