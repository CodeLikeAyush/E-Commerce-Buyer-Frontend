import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard";
import Loader from "../../components/LoadingWindow";

import { fetchProducts } from "./productsSlice";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page"));
  if (!currentPage) {
    let page_params = new URLSearchParams(searchParams);
    page_params.set("page", 1);
    setSearchParams(page_params);
  }
  const setCurrentPage = () => {
    let page_params = new URLSearchParams(searchParams);
    page_params.set("page", 1);
    setSearchParams(page_params);
  };
  const [gotoInput, setGoToInput] = useState(0);

  // const productAPICallsStatus = useSelector((state) => state.products.status);
  // const apiCallError = useSelector((state) => state.products.error);
  // const products = useSelector((state) => state.products.products.data || []);

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products?page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setProducts(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  // const cartItems = useSelector((state) => state.cart?.userCart?.cartItems);
  // console.log(cartItems);

  // useEffect(() => {
  //   if (productAPICallsStatus === "idle") {
  //     dispatch(fetchProducts());
  //   }
  // }, [productAPICallsStatus, products, dispatch]);
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-center items-center flex-wrap space-x-5 space-y-5">
            {products.data.map((product) => {
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
          {/* :::::::::::::::::::::::::::::::::::::::pagination controls:::::::::::::::::::::::::: */}
          <ul className="flex">
            <li>
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`border px-3 py-1 rounded-sm m-1 text-blue-500 ${
                  currentPage === 1 ? "bg-gray-400 text-white" : ""
                }`}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: products.total_pages }, (_, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setCurrentPage(index)}
                  className={`border px-3 py-1 rounded-sm m-1 text-blue-500  ${
                    currentPage === index ? " bg-blue-500 text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                type="button"
                disabled={currentPage + 1 > products.total_pages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`border px-3 py-1 rounded-sm m-1 text-blue-500 ${
                  currentPage === products.total_pages
                    ? "bg-gray-400 text-white"
                    : ""
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default Products;
