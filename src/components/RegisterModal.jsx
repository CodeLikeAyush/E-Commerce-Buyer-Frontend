// RegisterModal.jsx
import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function RegisterModalContent() {
  return (
    <div className="h-96 w-80 p-10 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Register
      </h2>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="true"
            className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600">Already registered?</span>
        <Link
          to="/login"
          replace
          className="text-blue-500 hover:text-blue-800 font-bold text-sm ml-1"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

function RegisterModal() {
  return <Modal>{<RegisterModalContent />}</Modal>;
}

export default RegisterModal;
