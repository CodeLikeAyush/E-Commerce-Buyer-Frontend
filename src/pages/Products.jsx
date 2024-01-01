import React from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <>
      <div className="flex justify-center flex-wrap space-x-5 space-y-5">
        {/* {productsData.map((productData) => {
          return (
            <ProductCard
              key={productData.id}
              productData={productData}
              onShowProductDetails={() => {
                navigate(`product-details/${productData.id}`);
              }}
            />
          );
        })} */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  );
}

export default Products;
