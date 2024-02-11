import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import CartScreen from "./screens/CartScreen.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import PaymentScreen from "./screens/PaymentScreen.tsx";
import ProductScreen from "./screens/ProductScreen.tsx";
import ShippingScreen from "./screens/ShippingScreen.tsx";
import SignUpScreen from "./screens/SignUpScreen.tsx";
import { store } from "./store/store.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
