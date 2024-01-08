import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItemCard from "../../components/CartItemCard";

// thunk function:
// import { fetchUserCart } from "./cartSlice";

// selector functions:
import { totalPrice_Cart } from "./cartSlice";
import { totalDiscount_Cart } from "./cartSlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);

  const fetchCartProducts = useCallback(async () => {
    try {
      if (cart.userCart && cart.userCart.totalItemCount > 0) {
        const items = cart.userCart?.cartItems.map((item) => item.product);
        const response = await fetch(
          "http://localhost:3000/api/cart/cart_products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productIds: items,
            }),
          }
        );
        const cartProducts = await response.json();
        setProducts(cartProducts);
        setLoading(false); // Set loading to false after data is fetched
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, [cart.userCart]);

  useEffect(() => {
    // dispatch(fetchUserCart());
    if (isLoggedIn) {
      fetchCartProducts();
    }
  }, [isLoggedIn, fetchCartProducts]);

  const totalCartPrice = useSelector((state) =>
    totalPrice_Cart(state, products)
  );
  const totalDiscount = useSelector((state) =>
    totalDiscount_Cart(state, products)
  );
  const findProduct = (productId) => {
    const foundProduct = products.find(
      (product) => product._id.toString() === productId.toString()
    );
    return foundProduct || null;
  };

  if (!isLoggedIn) {
    return (
      <Link
        to="/login"
        className="bg-red-600 border-2 px-10 py-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold rounded-full hover:bg-transparent hover:border-2 hover:text-red-600 hover:border-red-600 transition duration-300"
      >
        Login first
      </Link>
    );
  } else if (cart.userCart?.totalItemCount === 0) {
    return <div className="text-center">No item in cart</div>;
  } else if (loading) {
    return <div className="text-center">Loading........</div>;
  } else
    return (
      <div className="flex flex-col-reverse md:flex-row justify-between m-4">
        <div className="p-2 w-full md:w-2/3">
          {cart.userCart.cartItems.map((item) => (
            <CartItemCard
              key={item._id}
              cartItemId={item._id}
              product={findProduct(item.product)}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="shadow-lg w-full md:w-2/3 h-full p-4">
          <h1 className="text-blue-500 font-semibold text-3xl mb-4">
            Price Details
          </h1>
          <hr className="mb-4" />

          <ul className="list-none">
            <li className="flex justify-between">
              <span>Price ({cart.userCart.cartItems.length} items)</span>
              <span>₹{totalCartPrice}</span>
            </li>
            <li className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500 font-semibold">
                - ₹ {totalDiscount}
              </span>
            </li>
            <hr className="my-4" />
            <li className="flex justify-between">
              <span className="font-bold">Total Price</span>
              <span className="font-bold">
                ₹ {totalCartPrice - totalDiscount}
              </span>
            </li>
          </ul>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full md:w-2/3 font-semibold border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-transparent text-white hover:text-green-600 py-2 mt-4 rounded-full transition duration-500"
          >
            Checkout
          </button>
        </div>
      </div>
    );
}

export default Cart;
