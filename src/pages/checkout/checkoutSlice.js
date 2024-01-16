import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // status: "idle",
  // error: null,
  checkout_type: null, // = cart or product
  checkout_items: [],
  checkout_address: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCartItemsToCheckout: (state, action) => {
      console.log(action);
      state.checkout_type = "cart";
      state.checkout_items = [...action.payload];
    },
    addProudctToCheckout: (state, action) => {
      state.checkout_type = "product";
      console.log(action);
    },
    setDeliveryAddressForCheckout: (state, action) => {
      console.log(action);
      state.checkout_address = action.payload;
    },
  },
});

export default checkoutSlice.reducer;
export const { addCartItemsToCheckout, setDeliveryAddressForCheckout } =
  checkoutSlice.actions;
