import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import AddressCard from "./AddressCard";

import AddressModal from "./AddressModal.jsx";

import { useDispatch } from "react-redux";

import { setDeliveryAddressForCheckout } from "../pages/checkout/checkoutSlice.js";

function CheckoutAddress() {
  const dispatch = useDispatch();

  const [openAddressModal, setOpenAddressModal] = useState(0);
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
      dispatch(setDeliveryAddressForCheckout(addresses.address[0]._id));
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
    dispatch(setDeliveryAddressForCheckout(addressIdClicked));
  };

  const toggleAddressModal = (e) => {
    // implement logic to toggle address modal:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    console.log("toggle address modal");
  };
  return (
    <>
      {/* <AddressModal open={true} /> */}

      <div className="w-full">
        {/* Address container */}
        <div className="w-full ">
          <h1 className="text-blue-500 font-semibold text-3xl text-center my-5">
            Delivery Address
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={toggleAddressModal}
              className="md:col-span-2 shadow-md h-20 md:h-32 font-extrabold text-lg bg-orange-500 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:border-blue-300"
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
        </div>
      </div>
    </>
  );
}

export default CheckoutAddress;
