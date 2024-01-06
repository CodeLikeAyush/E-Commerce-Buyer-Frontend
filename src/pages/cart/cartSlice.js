import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userCart: null,
  status: "idle",
  error: null,
};

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cart");
      const userCart = await response.json();
      // console.log(userCart);
      return userCart;
    } catch (error) {
      throw error;
    }
  }
);

// export const removeItemFromCart = createAsyncThunk(
//   "cart/removeItem",
//   async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/cart", {
//         method: "DELETE",
//       });
//       console.log(response);
//     } catch (error) {}
//   }
// );
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userCart = action.payload;
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
// const export
