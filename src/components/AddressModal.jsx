// AddressModal.jsx
import React, { useState } from "react";
import Modal from "./Modal";

function AddressModalContent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const handleAddAddress = () => {
    // Implement your logic to handle adding the address
    // You can use the state values (firstName, lastName, etc.) here
    console.log("Address added:", {
      firstName,
      lastName,
      mobileNo,
      pincode,
      city,
      address,
      state,
    });
  };

  const handleReset = () => {
    // Implement your logic to reset the form
    setFirstName("");
    setLastName("");
    setMobileNo("");
    setPincode("");
    setCity("");
    setAddress("");
    setState("");
  };

  return (
    <div className="h-auto w-full p-10 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-600">
        Address
      </h2>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="mobileNo"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            Mobile No.
          </label>
          <input
            type="text"
            placeholder="Mobile No."
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="pincode"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            Pincode
          </label>
          <input
            type="text"
            placeholder="Pincode"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            City
          </label>
          <input
            type="text"
            placeholder="City"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            State
          </label>
          {/* Replace the options with your actual list of states */}
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="font-semibold text-sm text-gray-600 mb-1"
          >
            Address
          </label>
          <textarea
            placeholder="Address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border-2 border-blue-400 w-full py-2 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="col-span-2 flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="w-32 border-2 border-red-400 text-red-400 hover:text-white bg-transparent hover:bg-red-400 font-bold py-2 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-red-300"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleAddAddress}
            className="w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-green-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

function AddressModal({ open }) {
  return (
    <>
      <div className={open ? "" : "hidden"}>
        <Modal>{<AddressModalContent />}</Modal>
      </div>
    </>
  );
}

export default AddressModal;
