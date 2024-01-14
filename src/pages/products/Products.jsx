import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import Loader from "../../components/LoadingWindow";

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
        <Loader />
      ) : (
        <div className="flex justify-center items-center flex-wrap space-x-5 space-y-5">
          {products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                product={product}
                // isAnCartItem={isAnCartItem(product._id)}
                onShowProductDetails={() => {
                  navigate(`/products/${product._id}`);
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
