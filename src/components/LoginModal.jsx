// LoginModal.jsx
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Link, useNavigate } from "react-router-dom";

import { loginRequest } from "../globalSlices/authSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginModalContent() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialFormData = {
    email: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState(initialFormData);

  const handleInput = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ loginFormData }));
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate(-1);
    }
  });

  return (
    <div className="h-96 w-80 p-10 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Login
      </h2>
      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="email" className="text-sm text-gray-600 mb-1 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={loginFormData.email}
            onChange={handleInput}
            placeholder="Email"
            id="email"
            className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm text-gray-600 mb-1 ">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleInput}
            placeholder="Password"
            id="password"
            autoComplete="true"
            className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600">New user?</span>
        <Link
          to="/register"
          replace
          className="text-blue-500 hover:text-blue-800 font-bold text-sm ml-1"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

function LoginModal() {
  return <Modal>{<LoginModalContent />}</Modal>;
}

export default LoginModal;
