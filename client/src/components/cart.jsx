import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserData, isTokenValid } from "../tokenUtils.js";

const Cart = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
      const tokenIsValid = isTokenValid();
      if (tokenIsValid) {
        const userData = getUserData();
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `http://localhost:3000/cart/${user.userId}`
          );
          setCartItems(response.data.items); // Assuming the API response has an `items` array
        } catch (err) {
          setError("Failed to load cart data.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCart();
  }, [user]);

  const handleIncrease = async (productId) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/cart/${user.userId}/${productId}/increase`,
        { amount: 1 }
      );
      setCartItems(response.data.items); // Assuming API response includes updated cart
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleDecrease = async (productId) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/cart/${user.userId}/${productId}/decrease`,
        { amount: 1 }
      );
      setCartItems(response.data.items); // Assuming API response includes updated cart
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/cart/${user.userId}/items/${productId}`
      );
      if (response.status === 200) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId !== productId)
        );
      }
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const Checkout = () => {
    navigate("/checkout");
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-5">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-4 gap-2 text-center items-center">
            <div className="text-xl font-semibold border-b pb-2">PRODUCT</div>
            <div className="text-xl font-semibold border-b pb-2">PRICE</div>
            <div className="text-xl font-semibold border-b pb-2">QUANTITY</div>
            <div className="text-xl font-semibold border-b pb-2">TOTAL</div>
            {cartItems.map((item) => (
              <React.Fragment key={item.productId}>
                <div className="flex items-center gap-3 text-left p-2">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-gray-900 text-lg">{item.name}</p>
            
                  </div>
                </div>
                <div className="text-gray-900 text-lg">{item.price} LE</div>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="border px-2 py-1 bg-pink-700 text-white rounded hover:bg-pink-500"
                    onClick={() => handleDecrease(item.productId)}
                  >
                    -
                  </button>
                  <span className="text-gray-900 text-lg">{item.quantity}</span>
                  <button
                    className="border px-2 py-1 bg-pink-700 text-white rounded hover:bg-pink-500"
                    onClick={() => handleIncrease(item.productId)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-center w-full text-lg">
                    {item.price * item.quantity} LE
                  </span>
                  <button
                    className="text-red-500 hover:bg-red-500 hover:text-white px-2 py-1 rounded ml-3"
                    onClick={() => removeItem(item.productId)}
                  >
                    ✕
                  </button>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-10 mx-auto p-5 border rounded bg-gray-100 max-w-sm text-center">
            <h2 className="text-xl font-bold mb-3">Order Summary</h2>
            <p className="text-xl">Subtotal: ${subtotal}</p>
            <p className="text-xl">Shipping: Free</p>
            <button
              className="w-full py-2 mt-3 bg-pink-700 text-white font-semibold rounded hover:bg-pink-500 text-xl"
              onClick={Checkout}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
