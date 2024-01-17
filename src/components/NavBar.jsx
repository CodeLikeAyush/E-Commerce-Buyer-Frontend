import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const cartItemCount = useSelector((state) =>
    isLoggedIn ? state.cart.userCart?.totalItemCount : 0
  );

  const firstName = user ? user.firstName : "";

  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-blue-700 text-white p-4 font-semibold shadow-md sticky top-0 z-10 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Hamburger Menu Button for Mobile */}
            <div className="lg:hidden mr-4">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Home Link */}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/"
              className="text-2xl mx-4 focus:outline-none hover:text-white transition duration-300 hidden lg:block"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-2xl mx-4 focus:outline-none hover:text-white transition duration-300"
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className="text-2xl mx-4 focus:outline-none hover:text-white transition duration-300"
            >
              Categories
            </NavLink>
          </div>

          {/* Cart and Login Links */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-lg px-4 py-2 flex items-center relative"
            >
              <img
                src="cart_icon_fill.svg"
                alt="cart"
                className="h-6 m-2 invert"
              />
              Cart
              {(isLoggedIn && cartItemCount) > 0 && (
                // cart-badge:
                <span className="absolute left-8 top-1 h-5 w-5 text-center text-sm inline-flex items-center justify-center rounded-full bg-red-500 text-white-700 ">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <div className="group">
                <span className="border-2 cursor-pointer h-12 w-12 text-center text-2xl inline-flex items-center justify-center  border-white rounded-full bg-white text-blue-700 group-hover:text-white group-hover:bg-blue-700 transition duration-300">
                  {firstName.substring(0, 1)}
                </span>
                <div className="absolute right-3 hidden group-hover:block rounded overflow-hidden">
                  <div className="bg-white text-black cursor-pointer rounded">
                    <Link to="/profile" className="block p-2 hover:bg-gray-300">
                      Profile
                    </Link>
                    <Link
                      to="#"
                      className="block p-2 bg-red-700 hover:bg-red-500 text-white"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                state={{ background: location }}
                className="text-lg px-7 py-2 border-2 border-white rounded-full bg-white text-blue-700 hover:text-white hover:bg-blue-700 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 text-white p-4 font-semibold w-full sticky top-20 z-10">
          {/* Home Link */}
          <NavLink
            to="/"
            className="block py-2 hover:text-white transition duration-300"
          >
            Home
          </NavLink>

          {/* Products and Categories Links */}
          <NavLink
            to="/products"
            className="block py-2 hover:text-white transition duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/categories"
            className="block py-2 hover:text-white transition duration-300"
          >
            Categories
          </NavLink>
        </div>
      )}

      {/* Content Outlet */}
      <Outlet />
    </>
  );
}

export default NavBar;
