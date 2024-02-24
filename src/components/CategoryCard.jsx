import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products?category=${category._id}`)}
      className="relative h-60 w-60 overflow-hidden m-5 hover:shadow-2xl"
    >
      {/* Gray Background */}
      <div className="bg-gray-700 h-full w-full shadow-lg rounded-xl overflow-hidden cursor-pointer">
        {/* Category Image */}
        <img
          src={category.thumbnail}
          alt="Category"
          className="object-cover w-full h-full rounded-xl"
        />

        {/* Overlay with Category Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-center flex items-center justify-center font-bold text-2xl uppercase bg-black h-full w-full bg-opacity-40 px-4 py-2 rounded-xl">
            {category.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
