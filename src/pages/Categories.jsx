import React from "react";

import CategoryCard from "../components/CategoryCard";

let category_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Categories() {
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

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  );
}

export default Categories;
