import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../pages/products/productsSlice";
import authReducer from "../globalSlices/authSlice.js";
export default configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});
