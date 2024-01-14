import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle", // idle/succeeded,failed
  error: null, // null/string
};

// data/error produced by this createAsyncThunk function is assigned to the action variable in the extraReducers:
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (searchParams) => {
    try {
      console.log(searchParams);
      const response = await fetch("http://localhost:3000/api/products");
      //   const response = await fetch(
      //     "http://localhost:3000/api/products?price[gte]=100&category=6585e28968372962b16dbc6c&sort=price&fields=title,price,category&page=0&limit=9"
      //   );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Throwing the error here so that it gets captured by the rejected action
    }
  }
);

// export const addItemToCart = createAsyncThunk(
//   "products/addToCart",
//   async ({ productId }) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ productId }),
//       });
//       console.log(response);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        // console.log(action);
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // console.log(action); // {type: 'products/fetchProducts/fulfilled', payload: {…}, meta:............}
        state.status = "succeeded";
        state.products = action.payload; // Update state with the fetched products
        // state.products = state.products.concat(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // console.log(action)
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// selector functions:
export const isAnCartItem = (state, productId) => {
  // Use `some` instead of `find` to return a boolean indicating if the condition is met
  return state.cart?.userCart?.cartItems.some((cartItem) => {
    return cartItem.product === productId.toString();
  });
};

export default productsSlice.reducer;
