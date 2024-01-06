import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";

import { fetchProducts } from "./productsSlice";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productAPICallsStatus = useSelector((state) => state.products.status);
  const apiCallError = useSelector((state) => state.products.error);
  const products = useSelector((state) => state.products.products.data || []);

  // const cartItems = useSelector((state) => state.cart?.userCart?.cartItems);
  // console.log(cartItems);

  useEffect(() => {
    if (productAPICallsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productAPICallsStatus, products, dispatch]);
  return (
    <>
      {productAPICallsStatus === "loading" ? (
        <div>Loading.....</div>
      ) : (
        <div className="flex justify-center flex-wrap space-x-5 space-y-5">
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                product={product}
                // isAnCartItem={isAnCartItem(product._id)}
                onShowProductDetails={() => {
                  navigate(`/product-view/`);
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Products;
