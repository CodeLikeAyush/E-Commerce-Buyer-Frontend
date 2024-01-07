import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { removeItemFromCart } from "../pages/cart/cartSlice";
import { updateCartItemQuantity } from "../pages/cart/cartSlice";

function CartItemCard({ product, cartItemId, quantity }) {
  // const loadingStatus = useSelector((state)=>state.cart)
  const dispatch = useDispatch();

  console.log(product);
  return (
    <>
      <div className="mb-4 p-4 border rounded-md shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-4 shadow-lg">
            <img
              src={product.thumbnail}
              alt={"item.name"}
              className="h-24 w-24 object-fill rounded-md"
            />
          </div>
          <div className="flex items-center place-content-around">
            <span className="text-lg font-bold text-gray-800">
              ₹
              {Math.round(product.price * (1 - product.discountPercent * 0.01))}
            </span>
            <span className="text-sm text-gray-500 font-semibold line-through">
              ₹{Math.round(product.price)}
            </span>
            <span className="text-sm text-green-500 font-bold  ml-1">
              ({product.discountPercent}% off)
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() =>
                dispatch(
                  updateCartItemQuantity({
                    cartItemId,
                    updateType: "decrement_quantity",
                  })
                )
              }
              disabled={quantity < 2}
              className="font-extrabold text-2xl mx-2 text-red-500 hover:text-red-700 disabled:cursor-not-allowed"
            >
              &#8722;
            </button>
            <span className="font-bold text-gray-700 border-2 border-gray-500 py-0 px-4">
              {quantity}
            </span>
            <button
              onClick={() =>
                dispatch(
                  updateCartItemQuantity({
                    cartItemId,
                    updateType: "increment_quantity",
                  })
                )
              }
              disabled={quantity > 5}
              className="font-extrabold text-2xl mx-2 text-green-500 hover:text-green-700 disabled:cursor-not-allowed"
            >
              &#43;
            </button>
            <button
              onClick={() => dispatch(removeItemFromCart({ cartItemId }))}
              className="font-extrabold text-2xl mx-10 text-red-500 hover:text-red-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      </div>
    </>
    // <div>Cart Item Card</div>
  );
}

export default CartItemCard;
