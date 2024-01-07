import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItemCard from "../../components/CartItemCard";

// thunk function:
import { fetchUserCart } from "./cartSlice";

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

  const fetchCartItems = async () => {
    try {
      if (isLoggedIn && cart.userCart && cart.userCart.totalItemCount > 0) {
        const items = cart.userCart.cartItems.map((item) => item.product);
        const response = await fetch(
          "http://localhost:3000/api/cart/cart_items",
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
        setLoading(false);
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    dispatch(fetchUserCart());
    fetchCartItems();
  }, [isLoggedIn, navigate, dispatch]);

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

  let cartContent;
  if (cart.userCart?.totalItemCount === 0) {
    cartContent = <div>No item in cart</div>;
  }

  let content;
  if (!isLoggedIn) {
    content = (
      <button
        onClick={() => navigate("/login")}
        className="bg-red-600 border-2 px-10 py-4 my-52 text-white font-bold rounded-full hover:bg-transparent hover:border-2 hover:text-red-600 hover:border-red-600 transition duration-300"
      >
        Login first
      </button>
    );
  } else if (cart.userCart?.totalItemCount > 0 && !loading) {
    content = (
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
            onClick={() => {
              navigate("/checkout");
            }}
            className="w-full md:w-2/3 font-semibold border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-transparent text-white hover:text-green-600 py-2 mt-4 rounded-full transition duration-500"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  } else if (cart.userCart?.totalItemCount > 0 && loading) {
    content = <div>Loading........</div>;
  } else {
    content = <div>No Item In The Cart</div>;
  }

  return <>{content}</>;
}

export default Cart;
