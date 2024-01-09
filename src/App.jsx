import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import AddressModal from "./components/AddressModal";
import LoadingWindow from "./components/LoadingWindow";

import Home from "./pages/Home";

import "./App.css";
import ProductView from "./pages/ProductView";
import Products from "./pages/products/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=267669956141-f6kd1f8k228hh186imh1j7gbopgi4ln3.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fcodesandbox.io%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=email%20profile&state=M4-duLMniyprofr8r7Y44oP_&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow

import { useDispatch, useSelector } from "react-redux";
// thunk function:
import { fetchUserCart } from "./pages/cart/cartSlice";
// selectors:

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
      {/* <NavBar /> */}
      <AddressModal open={addressModalOpen} />
      {/* <LoadingWindow /> */}
      <Routes location={background || location}>
        <Route path="/" element={<NavBar />}>
          <Route index path="" element={<Home />} />
          <Route path="login" element={<LoginModal />} />
          <Route path="register" element={<RegisterModal />} />
          <Route path="products" element={<Products />} />
          <Route path="product-view" element={<ProductView />} />
          <Route path="categories" element={<Categories />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} /> */}
      </Routes>

      {background && (
        <Routes>
          <Route path="login" element={<LoginModal />} />
          <Route path="register" element={<RegisterModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
