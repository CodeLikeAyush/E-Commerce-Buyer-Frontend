import React, { useCallback } from "react";

import { useSelector } from "react-redux";

function OrderSummary() {
  const fetchCheckOutSummary = useCallback(async () => {
    try {
      // const items = cart.userCart?.cartItems.map((item) => item.product);
      // const
      const response = await fetch(
        "http://localhost:3000/api/order/order_summary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items,
            areCartItems: true,
          }),
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, [useSelector]);
  return (
    <>
      {/* Price details container */}
      <div className="border shadow-lg w-full md:w-2/3 h-full p-4">
        <h1 className="text-blue-500 font-semibold text-3xl mb-4">
          Order Summary
        </h1>
        <hr className="mb-4" />

        <ul className="list-none">
          <li className="flex justify-between">
            <span>Price (3 items)</span>
            <span>23232</span>
          </li>
          <li className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-500 font-semibold">-₹ 23232</span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charges</span>
            <span>23232</span>
          </li>
          <hr className="my-4" />
          <li className="flex justify-between">
            <span className="font-bold">Total Amount</span>
            <span className="font-bold">23232</span>
          </li>
        </ul>

        <button className="w-full md:w-2/3 font-semibold border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-transparent text-white hover:text-green-600 py-2 mt-4 rounded-full transition duration-500">
          Proceed to Payment
        </button>
      </div>
      {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <div className="flex flex-col md:flex-row"></div>
    </>
  );
}

export default OrderSummary;
