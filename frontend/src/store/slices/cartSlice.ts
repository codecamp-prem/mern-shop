import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("mern-cart")
  ? JSON.parse(localStorage.getItem("mern-cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
