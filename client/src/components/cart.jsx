import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "./checkout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
   
    {
      id: 2,
      name: "Underscarf",
      color: "Black",
      price: 132,
      quantity: 1,
      image: "https://levoilestores.com/cdn/shop/files/1_2c33ae67-42a2-44ba-97b0-baef5caa7fa6.jpg?v=1728404039&width=900",
    },
    {
      id: 3,
      name: "Underscarf",
      color: "White",
      price: 23,
      quantity: 2,
      image: "https://levoilestores.com/cdn/shop/files/1_2c33ae67-42a2-44ba-97b0-baef5caa7fa6.jpg?v=1728404039&width=900",
    },
    {
        id: 4,
        name: "Underscarf",
        color: "Blue",
        price: 100,
        quantity: 1,
        image: "https://levoilestores.com/cdn/shop/files/1_2c33ae67-42a2-44ba-97b0-baef5caa7fa6.jpg?v=1728404039&width=900",
      },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const navigate = useNavigate();

  const Checkout = () => {
    navigate("/checkout"); // Redirects to the checkout page
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-5">Your Cart</h1>
      <div className="grid grid-cols-4 gap-2 text-center items-center">
        <div className="font-bold border-b pb-2">PRODUCT</div>
        <div className="font-bold border-b pb-2">PRICE</div>
        <div className="font-bold border-b pb-2">QUANTITY</div>
        <div className="font-bold border-b pb-2">TOTAL</div>
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center gap-3 text-left p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p>{item.name}</p>
                <p className="text-gray-500 text-sm">{item.color}</p>
              </div>
            </div>
            <div>${item.price}</div>
            <div className="flex items-center justify-center gap-2">
              <button
                className="border px-2 py-1 bg-pink-700 text-white rounded hover:bg-pink-500"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="border px-2 py-1 bg-pink-700 text-white rounded hover:bg-pink-500"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-between">
  <span className="text-center w-full">${item.price * item.quantity}</span>
  <button
    className="text-red-500 hover:bg-red-500 hover:text-white px-2 py-1 rounded ml-3"
    onClick={() => removeItem(item.id)}
  >
    ✕
  </button>
</div>

          </React.Fragment>
        ))}
      </div>
      <div className="mt-10 mx-auto p-5 border rounded bg-gray-100 max-w-sm text-center">
        <h2 className="text-lg font-bold mb-3">Order Summary</h2>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping: Free</p>
        <button className="w-full py-2 mt-3 bg-pink-700 text-white font-bold rounded hover:bg-pink-500" onClick={Checkout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
