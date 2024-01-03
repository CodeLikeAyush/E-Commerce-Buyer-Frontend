import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "IPhone 14 Pro Max",
      price: 31990,
      discountedPrice: 51999,
      discount: 38,
      rating: 4.5,
      quantity: 5,
      imageUrl:
        "https://rukminim2.flixcart.com/image/224/224/kapoo7k0/vehicle-tire/w/z/w/105640-145-80-r12-fuelsmarrt-tl-74t-ceat-original-imafs7ebyzejhzkt.jpeg?q=90",
    },
    {
      id: 2,
      name: "IPhone 14 Pro Max",
      price: 31990,
      discountedPrice: 51999,
      discount: 38,
      rating: 4.5,
      quantity: 5,
      imageUrl:
        "https://rukminim2.flixcart.com/image/224/224/kapoo7k0/vehicle-tire/w/z/w/105640-145-80-r12-fuelsmarrt-tl-74t-ceat-original-imafs7ebyzejhzkt.jpeg?q=90",
    },
    {
      id: 3,
      name: "IPhone 14 Pro Max",
      price: 31990,
      discountedPrice: 51999,
      discount: 38,
      rating: 4.5,
      quantity: 5,
      imageUrl:
        "https://rukminim2.flixcart.com/image/224/224/kapoo7k0/vehicle-tire/w/z/w/105640-145-80-r12-fuelsmarrt-tl-74t-ceat-original-imafs7ebyzejhzkt.jpeg?q=90",
    },
  ]);

  // function to remove item from cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // function to increment item quantity
  const handleIncrementQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // function to decrement item quantity
  const handleDecrementQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  // function to calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    //  function to calculate discount
    return cartItems.reduce(
      (discount, item) =>
        discount + (item.discountedPrice - item.price) * item.quantity,
      0
    );
  };

  //  function to calculate delivery charges
  const calculateDeliveryCharges = () => {
    // For now, we are returning a static value, will come from server
    return 23232;
  };

  //  function to handle placing the order
  const handlePlaceOrder = () => {
    // we will use the calculated values (totalPrice, discount, deliveryCharges) here
    console.log("Order Placed!");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between m-4">
      <div className=" p-2 w-full md:w-2/3 ">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mr-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {item.quantity} x ₹{item.price}
                </p>
                <span className="text-sm text-green-500 font-bold">
                  - ₹{calculateDiscount()}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrementQuantity(item.id)}
                  className="font-extrabold text-2xl mx-2 text-red-500 hover:text-red-700"
                >
                  &#8722;
                </button>
                <span className="font-bold text-gray-700 border-2 border-gray-500 py-0 px-4">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleIncrementQuantity(item.id)}
                  className="font-extrabold text-2xl mx-2 text-green-500 hover:text-green-700"
                >
                  &#43;
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="font-extrabold text-2xl mx-10 text-red-500 hover:text-red-700"
                >
                  &#10005;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-lg w-full md:w-2/3 h-full p-4">
        <h1 className="text-blue-500 font-semibold text-3xl mb-4">
          Price Details
        </h1>
        <hr className="mb-4" />

        <ul className="list-none">
          <li className="flex justify-between">
            <span>Price ({cartItems.length} items)</span>
            <span>₹{calculateTotalPrice()}</span>
          </li>
          <li className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-500 font-semibold">
              - ₹ {calculateDiscount()}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Delivery Charges</span>
            <span>₹{calculateDeliveryCharges()}</span>
          </li>
          <hr className="my-4" />
          <li className="flex justify-between">
            <span className="font-bold">Total Price</span>
            <span className="font-bold">
              ₹
              {calculateTotalPrice() -
                calculateDiscount() +
                calculateDeliveryCharges()}
            </span>
          </li>
        </ul>

        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="w-full md:w-2/3 font-semibold border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-transparent text-white hover:text-green-600 py-2 mt-4 rounded-full transition duration-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
