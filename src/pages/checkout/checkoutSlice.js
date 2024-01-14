import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // status: "idle",
  // error: null,
  checkout_items: [],
  checkout_address: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCartItemsToCheckout: (state, action) => {
      console.log(action);
      state.checkout_items = [...action.payload];
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
