import React, { useCallback, useEffect, useState } from "react";

import CategoryCard from "../components/CategoryCard";
import Loader from "../components/LoadingWindow";

let category_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Categories() {
  const [categories, setCategories] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const fetchCatogories = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/categories");
      const data = await response.json();
      setCategories(data);
      setLoadingCategories(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchCatogories();
  }, [fetchCatogories]);
  return (
    <>
      <h1 className="m-20 font-extrabold text-4xl text-blue-500 tracking-wide border-b-2">
        All Categories
      </h1>
      <div className="flex justify-center flex-wrap space-x-5 space-y-5 mt-10">
        {/* {dataLoaded ? (
          categoryData.map((category, index) => {
            return <CategoryCard key={index} category={category} />;
          })
        ) : (
          <h1 className="font-bold text-2xl">Loading......</h1>
        )} */}
        {loadingCategories ? (
          <Loader />
        ) : (
          categories.map((category) => {
            return <CategoryCard key={category._id} category={category} />;
          })
        )}
      </div>
    </>
  );
}

export default Categories;
