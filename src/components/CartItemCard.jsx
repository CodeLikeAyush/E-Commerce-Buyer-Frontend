import React from "react";

function CartItemCard({ product, quantity }) {
  console.log(product);
  return (
    <>
      <div className="mb-4 p-4 border rounded-md shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-4 shadow-lg">
            <img
              src={product.thumbnail}
              alt={"item.name"}
              className="h-24 w-24 object-cover rounded-md"
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
              // onclick={() => handleDecrementQuantity(item.id)}
              className="font-extrabold text-2xl mx-2 text-red-500 hover:text-red-700"
            >
              &#8722;
            </button>
            <span className="font-bold text-gray-700 border-2 border-gray-500 py-0 px-4">
              {quantity}
            </span>
            <button
              // onclick={() => handleIncrementQuantity(item.id)}
              className="font-extrabold text-2xl mx-2 text-green-500 hover:text-green-700"
            >
              &#43;
            </button>
            <button
              // onclick={() => handleRemoveItem(item.id)}
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
