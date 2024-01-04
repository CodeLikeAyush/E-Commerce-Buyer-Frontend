import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";

import { fetchProducts } from "./productsSlice";

function Products() {
  const dispatch = useDispatch();

  const productAPICallsStatus = useSelector((state) => state.products.status);
  const apiCallError = useSelector((state) => state.products.error);
  const products = useSelector((state) => state.products.products.data || []);

  useEffect(() => {
    if (productAPICallsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productAPICallsStatus, products, dispatch]);
  return (
    <>
      <div className="flex justify-center flex-wrap space-x-5 space-y-5">
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              onShowProductDetails={() => {
                navigate(`product-details/${product.id}`);
              }}
            />
          );
        })}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
}

export default Products;
