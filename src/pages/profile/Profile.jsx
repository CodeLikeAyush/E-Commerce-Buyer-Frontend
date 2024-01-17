import React from "react";

import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <div className="m-5 grid md:grid-cols-4 gap-3">
        <Link
          to="#"
          className="flex flex-col items-center justify-center text-center border h-44 hover:bg-blue-600  transition duration-500 shadow-md rounded-md text-3xl text-black hover:text-white font-bold"
        >
          <img
            src="../../../dist/personal-info.svg"
            alt="orders-img"
            className="h-20 w-20"
          />{" "}
          Profile Information
        </Link>
        <Link
          to="/profile/orders"
          className="flex flex-col items-center justify-center border h-44 hover:bg-blue-600  transition duration-500 shadow-md rounded-md text-3xl text-black hover:text-white font-bold"
        >
          <img
            src="../../../dist/orders.svg"
            alt="orders-img"
            className="h-20 w-20"
          />{" "}
          Orders
        </Link>
        <Link
          to="/profile/addresses"
          className="flex flex-col items-center justify-center border h-44 hover:bg-blue-600  transition duration-500 shadow-md rounded-md text-3xl text-black hover:text-white font-bold"
        >
          <img
            src="../../../dist/address.svg"
            alt="orders-img"
            className="h-20 w-20"
          />{" "}
          Addresses
        </Link>
        <Link
          to="/profile/wishlist"
          className="flex flex-col items-center justify-center border h-44 hover:bg-blue-600  transition duration-500 shadow-md rounded-md text-3xl text-black hover:text-white font-bold"
        >
          <img
            src="../../../dist/wishlist.svg"
            alt="orders-img"
            className="h-20 w-20"
          />{" "}
          Wish List
        </Link>
      </div>
    </>
  );
}

export default Profile;
