import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressCard from "../../components/AddressCard";
import Stepper from "../../components/Stepper";

import CheckoutAddress from "../../components/CheckoutAddress";
import OrderSummary from "../../components/OrderSummary";

import { useSelector } from "react-redux";

function Checkout() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const items = useSelector((state) => state.cart.userCart?.cartItems);

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isLoggedIn) {
      // fetUserAddresses();
      // fetchCheckOutSummary();
    }
  }, [isLoggedIn]);

  const steps = [
    { name: "Address" },
    { name: "Order Summary" },
    { name: "Payment" },
  ];

  if (!isLoggedIn) {
    return (
      <Link
        to="/login"
        className="bg-red-600 border-2 px-10 py-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold rounded-full hover:bg-transparent hover:border-2 hover:text-red-600 hover:border-red-600 transition duration-300"
      >
        Login first
      </Link>
    );
  } else if (!items || items.length == 0) {
    return <div>You don't have anything in cart. Continue Shopping</div>;
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

        <h1 className="font-bold text-4xl text-blue-700">Checkout</h1>
        <hr className="m-10" />

        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        >
          {currentStep === 0 && <CheckoutAddress />}
          {currentStep === 1 && <OrderSummary />}
        </Stepper>
      </>
    );
}

export default Checkout;
