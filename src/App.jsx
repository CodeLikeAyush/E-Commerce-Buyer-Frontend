import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import AddressModal from "./components/AddressModal";
import LoadingWindow from "./components/LoadingWindow";

import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Products from "./pages/products/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import NotFoundPage from "./pages/NotFoundPage";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserCart } from "./pages/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const fetchUserCartStatus = useSelector((state) => state.cart.status);
  useEffect(() => {
    if (fetchUserCartStatus === "idle" && isLoggedIn === true) {
      console.log("fetching cart");
      dispatch(fetchUserCart());
    }
  }, [isLoggedIn, dispatch]);
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  return (
    <>
      <AddressModal open={addressModalOpen} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductView />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
