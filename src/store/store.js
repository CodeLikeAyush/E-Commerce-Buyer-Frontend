import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../pages/products/productsSlice";
import authReducer from "../globalSlices/authSlice.js";
import cartReducer from "../pages/cart/cartSlice";
import checkoutReducer from "../pages/checkout/checkoutSlice.js";

export default configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
