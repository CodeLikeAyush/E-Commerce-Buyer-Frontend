import React from "react";

function CategoryCard() {
  return (
    <div className="relative h-60 w-60 bg-gray-700 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:outline-none hover:shadow-2xl transition-transform m-5 transform hover:scale-105">
      {/* Category Image */}
      <img
        src="https://nobero.com/cdn/shop/files/powder-blue_bfcac69b-b9ca-4104-a88c-6ffe048e06a3.jpg?v=1703052965&width=360" // Replace with the actual URL of your category image
        alt="Category"
        className="object-cover w-full h-full"
      />

      {/* Overlay with Category Name */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-2xl uppercase bg-black bg-opacity-50 px-4 py-2">
          {"Hoodies"}
        </span>
      </div>
    </div>
  );
}

export default CategoryCard;
