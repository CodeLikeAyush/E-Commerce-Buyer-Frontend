import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressCard from "../components/AddressCard";

function Checkout() {
  const navigate = useNavigate();

  const addresses = [
    {
      addressId: 1,
      username: "Ayush Raj",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400013",
      addressInfo: "224, A To Z Ind Est, Lower Parel",
      mobile: "04425357422",
    },
    {
      addressId: 2,
      username: "Ayush Raj",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400013",
      addressInfo: "224, A To Z Ind Est, Lower Parel",
      mobile: "04425357422",
    },
    {
      addressId: 3,
      username: "Ayush Raj",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400013",
      addressInfo: "224, A To Z Ind Est, Lower Parel",
      mobile: "04425357422",
    },
    {
      addressId: 4,
      username: "Ayush Raj",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400013",
      addressInfo: "224, A To Z Ind Est, Lower Parel",
      mobile: "04425357422",
    },
  ];
  const [activeAddressId, setActiveAddressId] = useState(
    addresses[0].addressId
  );

  const handleSelect = (addressIdClicked) => {
    setActiveAddressId(addressIdClicked);
  };

  const toggleAddressModal = (e) => {
    // implement logic to toggle address modal:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    console.log("toggle address modal");
  };

  return (
    <>
      {/* back button: */}
      <button
        onClick={() => {
          navigate(-1);
        }}
        title="Go Back"
        className="bg-white m-5  text-gray-800  text-9xl font-extrabold py-3 px-2 border-2 rounded-full flex items-center shadow-2xl"
      >
        <svg
          className="h-4 w-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>

      {/* ::::::::::::::::::::::::::::::::: */}
      <h1 className="font-bold text-4xl text-blue-700">Checkout</h1>
      <hr className="m-10" />
      <div className="flex flex-col md:flex-row">
        {/* Address container */}
        <div className="flex flex-col item-center w-full md:w-3/4 ">
          <h1 className="text-blue-500 font-semibold text-3xl mb-4">
            Delivery Address
          </h1>
          <button
            onClick={toggleAddressModal}
            className="shadow-md h-20 md:h-32 w-full md:w-3/4  mx-4 my-2 font-extrabold text-lg bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            + | Add New Address
          </button>

          {/* Addresses cards */}
          {addresses.map((address) => (
            <AddressCard
              key={address.addressId}
              address={address}
              activeAddressId={activeAddressId}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        {/* Price details container */}
        <div className="shadow-lg w-full md:w-2/3 h-full p-4">
          <h1 className="text-blue-500 font-semibold text-3xl mb-4">
            Price Details
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
