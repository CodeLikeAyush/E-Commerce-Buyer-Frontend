import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressCard from "../components/AddressCard";
import { useSelector } from "react-redux";

function Checkout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [addresses, setAddresses] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);

  const [activeAddressId, setActiveAddressId] = useState(null);

  const fetUserAddresses = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/address/");
      const addresses = await response.json();
      setAddresses(addresses.address);
      setLoadingAddresses(false);
      setActiveAddressId(addresses.address[0]._id);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetUserAddresses();
    }
  }, [isLoggedIn, fetUserAddresses]);

  const handleSelect = (addressIdClicked) => {
    setActiveAddressId(addressIdClicked);
  };

  const toggleAddressModal = (e) => {
    // implement logic to toggle address modal:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    console.log("toggle address modal");
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
  } else
    return (
      <>
        {/* back button: */}
        <button
          onClick={() => {
            navigate(-1);
          }}
          title="Go Back"
          className="bg-white m-5  text-gray-800  text-lg font-bold py-3 px-4 border-2 rounded-full flex items-center hover:shadow-lg"
        >
          &#129028; Back
        </button>

        {/* ::::::::::::::::::::::::::::::::: */}
        <h1 className="font-bold text-4xl text-blue-700">Checkout</h1>
        <hr className="m-10" />
        <div className="flex flex-col md:flex-row">
          {/* Address container */}
          <div className="flex flex-col item-center w-full md:w-3/4 ">
            <h1 className="text-blue-500 font-semibold text-3xl text-left ml-6 mb-4">
              Delivery Address
            </h1>

            <button
              onClick={toggleAddressModal}
              className="shadow-md h-20 md:h-32 w-full md:w-3/4  mx-4 my-2 font-extrabold text-lg bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:border-blue-300"
            >
              &#43; | Add New Address
            </button>

            {/* Addresses cards */}
            {addresses.map((address, index) => (
              <AddressCard
                key={address._id}
                address={address}
                activeAddressId={activeAddressId}
                handleSelect={handleSelect}
              />
            ))}
          </div>

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
                <span className="font-bold">Total Price</span>
                <span className="font-bold">23232</span>
              </li>
            </ul>

            <button className="w-full md:w-2/3 font-semibold border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-transparent text-white hover:text-green-600 py-2 mt-4 rounded-full transition duration-500">
              Place Order
            </button>
          </div>
        </div>
      </>
    );
}

export default Checkout;
