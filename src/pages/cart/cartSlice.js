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

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ productId }) => {
    try {
      const response = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      if (response.status === 409) {
        throw new Error("add-item-to-cart failed. Item already in cart");
      } else if (response.status === 201) {
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({ cartItemId }) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/cart/${cartItemId}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 404) {
        throw new Error("item to be removed does not exits");
      } else if (response.status === 500) {
        throw new Error("internal server error");
      } else if (response.status === 204) return { itemId: cartItemId };
    } catch (error) {
      throw error;
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ cartItemId, updateType }) => {
    try {
      console.log(cartItemId, updateType);
      const response = await fetch(
        `http://localhost:3000/api/cart/${cartItemId}?update_type=${updateType}`,
        {
          method: "PUT",
        }
      );
      if (response.status === 204) {
        return {
          cartItemId,
          updateType,
        };
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);
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
      })
      .addCase(addItemToCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        console.log(action);
        return {
          ...state,
          status: "succeeded",
          userCart: {
            ...state.userCart,
            totalItemCount: state.userCart.totalItemCount + 1,
            cartItems: [
              ...state.userCart.cartItems,
              {
                _id: action.payload._id,
                product: action.payload.productId,
                quantity: 1,
              },
            ],
          },
        };
      })

      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeItemFromCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        const removedItemId = action.payload.itemId;

        // Filter out the item with the specified _id
        state.userCart.cartItems = state.userCart.cartItems.filter(
          (item) => item._id !== removedItemId
        );

        // Update totalItemCount
        state.userCart.totalItemCount -= 1;

        state.status = "succeeded";
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateCartItemQuantity.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedCartItems = state.userCart.cartItems.map((cartItem) => {
          if (cartItem._id === action.payload.cartItemId) {
            return {
              ...cartItem,
              quantity:
                action.payload.updateType === "increment_quantity"
                  ? cartItem.quantity + 1
                  : cartItem.quantity - 1,
            };
          } else {
            return cartItem;
          }
        });
        state.userCart.cartItems = updatedCartItems;
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const totalPrice_Cart = (state, products) => {
  const cartItems = state.cart.userCart?.cartItems || []; // Used optional chaining to guard against null/undefined
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (cartItems[i].product === products[j]._id) {
        totalPrice += cartItems[i].quantity * products[j].price;
        break; // Breaking the inner loop since the product is found
      }
    }
  }

  return totalPrice;
};

export const totalDiscount_Cart = (state, products) => {
  const cartItems = state.cart.userCart?.cartItems || []; // Used optional chaining to guard against null/undefined

  let totalDiscount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (cartItems[i].product === products[j]._id) {
        totalDiscount +=
          cartItems[i].quantity *
          (products[j].price * products[j].discountPercent * 0.01);
        break; // Breaking the inner loop since the product is found
      }
    }
  }
  return totalDiscount;
};

export default cartSlice.reducer;
