import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function ProductView() {
  const navigate = useNavigate();
  const images = [
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/o/h/c/power-bank-dx15-20000-mah-dx15-20k-20000-callmate-original-imagqkjnmxtqfhds.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/c/o/x/power-bank-dx15-20000-mah-dx15-20k-20000-callmate-original-imagqkjnxmgghysn.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/j/i/c/power-bank-dx15-20000-mah-dx15-20k-20000-callmate-original-imagqkjnxkfgzr7f.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/x/n/l/power-bank-dx15-20000-mah-dx15-20k-20000-callmate-original-imagqkjnjdngvfpg.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/m/p/4/power-bank-dx15-20000-mah-dx15-20k-20000-callmate-original-imagqkjnhtns9sdr.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/416/416/xif0q/power-bank/6/e/l/-original-imagqhq5jmxqekw5.jpeg?q=70",
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleMouseHover = (index) => {
    setActiveIndex(index);
  };

  // Hardcoded product details
  const productDetails = {
    title: "Sample Product",
    description:
      "SAMSUNG 24 inch Full HD LED Backlit IPS Panel with 3-Sided Borderless Display, Game & Free Sync Mode, Eye Saver Mode & Flicker Free Monitor (LS24C310EAWXXL)",
    rating: 4.5,
    discountPercentage: 20,
    price: 999,
  };

  return (
    <>
      {/* back button: */}
      <button
        onClick={() => {
          navigate(-1);
        }}
        title="Go Back"
        className="bg-white m-5  text-gray-800  text-9xl py-3 px-4 border-2 rounded-full flex items-center shadow-2xl"
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
        <span className="text-sm font-semibold">Back</span>
      </button>
      <div className="border-2 mt-5 pb-20 md:pb-0 flex flex-col items-center md:flex-row sm:justify-between shadow-md">
        {/* Product view image-gallary container */}
        <div className="md:border-r-2 flex flex-col-reverse items-center p-8 sm:flex-col-reverse md:flex-row">
          {/* Small Thumbnail images */}
          <div className="m-2 overflow-x-scroll overflow-y-auto md:overflow-y-scroll md:overflow-x-auto flex sm:flex-row md:flex-col md:items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`h-20 w-20 border-4 border-solid border-gray-400 p-1 cursor-pointer transition-transform transform hover:border-4 hover:border-blue-600`}
                onMouseOver={() => handleMouseHover(index)}
              />
            ))}
          </div>

          {/* Large image view */}
          <div className="relative border-2 border-gray-400 p-2 w-96 h-96">
            <img
              src={images[activeIndex]}
              alt="Product"
              className="object-contain shadow-md w-full h-full"
            />
            {/* Heart button at the top-right corner */}
            <button className="absolute top-5 right-5 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-10 w-10 rounded-full hover:bg-red-100 text-gray-600 p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Product details */}
        <div className=" flex flex-col items-center  h-96 w-full">
          <h2 className="font-bold text-3xl text-gray-800 mb-2">
            {productDetails.title}
          </h2>
          <p className="text-gray-600 text-lg text-left mb-4 mx-3">
            {productDetails.description}
          </p>

          {/* RATING */}
          <div className="flex items-center mb-4">
            <span className="text-xs bg-green-500 text-white font-bold py-1 px-2 rounded-md mr-2">
              {productDetails.rating} ★
            </span>
            <span className="text-gray-600 text-lg">Average Rating</span>
          </div>

          {/* PRICE-DISCOUNTED_PRICE-OFF */}
          <div className="mb-4 flex items-center">
            <span className="text-xl font-bold text-green-600 mr-4">
              {productDetails.discountPercentage}% off
            </span>
            <span className="text-2xl line-through text-gray-500 mr-4">
              ₹{productDetails.price}
            </span>
            <span className="text-4xl font-bold">
              ₹
              {Math.floor(
                productDetails.price *
                  (1 - productDetails.discountPercentage * 0.01)
              )}
            </span>
          </div>

          {/* ADD-TO-CART & BUY-NOW */}
          <div className="flex flex-col lg:flex-row w-full md:w-auto">
            <button className="bg-green-600 border-2 px-6 py-4 m-2 text-white font-bold rounded-full hover:bg-transparent hover:border-2 hover:text-green-600 hover:border-green-600 transition duration-300 ">
              Add To Cart
            </button>
            <button className="bg-red-600 border-2 px-6 py-4 m-2 text-white font-bold rounded-full hover:bg-transparent hover:border-2 hover:text-red-600 hover:border-red-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Rating/Review Section:::::::::::::::::::::::::::::::::::::::::::::: */}
      <div className="h-auto md:h-96 py-10  w-full mt-5 shadow-md flex flex-col md:flex-row items-center justify-around">
        {/* rating percent pie-chart: */}
        <div className="flex flex-row items-center justify-center p-2">
          <div className="mx-2">
            <progress
              value={75}
              min="0"
              max="100"
              style={{ visibility: "hidden", height: 0, width: 0 }}
            >
              {75}%
            </progress>
            <div
              className="w-20 h-20 rounded-full bg-gradient-to-r from-white via-white to-transparent relative"
              style={{
                backgroundImage: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(green 75%, lightgray 0)`,
              }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="font-bold text-lg">4.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* avg-rating/total-rating/total-reviews: */}
        <div className=" h-80 w-72 flex flex-col items-center justify-center font-bold text-3xl text-blue-700">
          <span>3.8 ★ Rating</span>
          <span>3000 ratings </span>
          <span>200 reviews</span>
        </div>

        {/* different rating count: */}
        <div className="flex flex-col">
          <span>
            <label htmlFor="rating-5" className="font-bold m-1">
              5 ★
            </label>
            <progress id="rating-5" max={100} value={75}></progress>
            <span className="font-semibold m-1 text-gray-400">100</span>
          </span>
          <span>
            <label htmlFor="rating-5" className="font-bold m-1">
              4 ★
            </label>
            <progress id="rating-5" max={100} value={60}></progress>
            <span className="font-semibold m-1 text-gray-400">100</span>
          </span>
          <span>
            <label htmlFor="rating-5" className="font-bold m-1">
              3 ★
            </label>
            <progress id="rating-5" max={100} value={30}></progress>
            <span className="font-semibold m-1 text-gray-400">100</span>
          </span>
          <span>
            <label htmlFor="rating-5" className="font-bold m-1">
              2 ★
            </label>
            <progress id="rating-5" max={100} value={10}></progress>
            <span className="font-semibold m-1 text-gray-400">100</span>
          </span>
          <span>
            <label htmlFor="rating-5" className="font-bold m-1">
              1 ★
            </label>
            <progress id="rating-5" max={100} value={75}></progress>
            <span className="font-semibold m-1 text-gray-400">100</span>
          </span>
        </div>
      </div>

      {/* reviews::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      {/* reviews' container: */}
      <div className="my-5 p-5">
        <h1 className="font-bold text-4xl">Ratings & Reviews</h1>
        {/* that single rating: */}
        <div className="m-5 p-5 shadow-lg">
          <div className="m-5 flex flex-row items-center ">
            <span className=" m-2 bg-blue-600 text-white py-2 px-3 font-bold text-3xl rounded-full cursor-pointer">
              M
            </span>

            <span className=" m-2 text-gray-600 font-bold">Mohan Lal</span>
            <span className=" m-2 text-xs px-2 py-1 bg-green-800 text-white rounded-md">
              {"4.5"} ★
            </span>
          </div>
          <div className="text-left  m-5 ">
            Such a brilliant picture quality in this price bracket. Tremendous
            brightness with utra sharp viewing experience. Got the monitor in
            very reasonable price compare than market. Go with this without any
            doubt. Worth every penny Awesome monitor for WFHsize is also
            perfect. It can be tilted by loosing screws behind black tape of the
            stand. Decent monitor at this price range. Bought it for wfh and
            it's serving the purpose. Could have been better with tilt
            adjustment. Decent monitor at this price range. Bought it for wfh
            and it's serving the purpose. Could have been better with tilt
            adjustment. Decent monitor at this price range. Bought it for wfh
            and it's serving the purpose. Could have been better with tilt
            adjustment.
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
