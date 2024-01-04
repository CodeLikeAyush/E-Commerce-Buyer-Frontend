import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  status: "idle",
  error: null,
};

export const loginRequest = createAsyncThunk(
  "auth/loginRequest",
  async ({ loginFormData }) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginFormData),
      });
      if (response.status !== 200) { // if status is not 200 means invalid credentials or internal-server-error. in both cases server will send statusText:unauthorized or internal server error 
        throw new Error(response.statusText);
      }
      const user = await response.json();
      return user;
    } catch (error) {
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginRequest.pending, (state, action) => {
        // console.log(action);
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        // console.log(action); // {type: 'products/loginRequest/fulfilled', payload: {…}, meta:............}
        state.status = "succeeded";
        state.isLoggedIn = true; // Update state with the fetched products
        state.user = action.payload;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        // console.log(action)
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
