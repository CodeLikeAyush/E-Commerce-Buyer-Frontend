import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartItemQuantity,
} from "../pages/cart/cartSlice";

function CartItemCard({ product, cartItemId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mb-4 p-4 border rounded-md shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mr-4 shadow-lg">
          <img
            src={product.thumbnail}
            alt={`${product.title}-image`}
            className="h-24 w-24 object-fill rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <span className="text-lg font-bold text-gray-800">
              ₹
              {Math.round(product.price * (1 - product.discountPercent * 0.01))}
            </span>
            <span className="text-sm text-gray-500 font-semibold line-through ml-1">
              ₹{Math.round(product.price)}
            </span>
            <span className="text-sm text-green-500 font-bold ml-1">
              ({product.discountPercent}% off)
            </span>
            <div className="flex items-center ml-4">
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
                disabled={quantity >= product.available_quantity}
                className="font-extrabold text-2xl mx-2 text-green-500 hover:text-green-700 disabled:cursor-not-allowed"
              >
                &#43;
              </button>
              <button
                onClick={() => dispatch(removeItemFromCart({ cartItemId }))}
                className="font-extrabold text-2xl ml-4 text-red-500 hover:text-red-700"
              >
                &#10005;
              </button>
            </div>
            {product.available_quantity <= 0 && (
              <span className="md:ml-10 bg-red-500 text-white rounded-3xl px-5 py-2">
                Out of Stock
              </span>
            )}
            {product.available_quantity > 0 && (
              <span className="md:ml-10 bg-green-500 text-white rounded-3xl px-5 py-2">
                {product.available_quantity} available
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
