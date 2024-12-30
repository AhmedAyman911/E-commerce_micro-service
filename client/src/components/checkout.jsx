import { useState, useEffect } from "react";
import { getUserData, isTokenValid } from "../tokenUtils.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Get info from token
  const [user, setUser] = useState(null);

  // Form state variables
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [orderError, setOrderError] = useState(null);

  // Fetch user data on mount
  useEffect(() => {
    const tokenIsValid = isTokenValid();
    if (tokenIsValid) {
      const userData = getUserData();
      setUser(userData);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `http://localhost:3000/cart/${user.userId}`
          );
          setCartItems(response.data.items);
        } catch (err) {
          setError("Failed to load cart data.");
        }
      }
    };
    fetchCart();
  }, [user]);
  const clearCart = async () => {
    try {
      await axios.delete(`http://localhost:3000/cart/${user.userId}`);
      setCartItems([]); // Clear the cart items in the frontend
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  };

  // Populate form fields with user data
  useEffect(() => {
    if (user) {
      setFullName(user.name || "");
      setEmail(user.email || "");
      setPhoneNumber(user.phone || "");
      setAddress(user.address || "");
      setCity(user.city || "");
      setPostalCode(user.postalCode || "");
    }
  }, [user]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    setIsOrderProcessing(true);
    setOrderError(null);
    setOrderSuccess(null);

    const orderData = {
      uid: user.userId,
      name: fullName,
      email,
      phone: phoneNumber,
      address: `${address}, ${city}, ${postalCode}`,
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        photo: item.photo,
      })),
      totalAmount: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      paymentMethod,
    };

    try {
      await axios.post("http://localhost:3000/orders", orderData);
      console.log(orderData)
      setOrderSuccess("Order placed successfully!");
      await clearCart();
      navigate("/home");
    } catch (error) {
      console.log(orderData)
      setOrderError("Failed to place order. Please try again.");
    } finally {
      setIsOrderProcessing(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full px-12 md:px-32 py-8">
      {/* Left Section: Checkout Details */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <p className="font-bold text-black text-3xl">Checkout</p>
        <hr className="border-t-2 border-black-300 mt-2" />

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-4">
            <div className="flex">
              <img
                className="w-24 h-24 object-cover rounded-md border border-gray-300 p-1"
                src={item.photo}
                alt={item.name}
              />
              <div className="flex-col">
                <p className="text-md text-black px-2 mt-2">{item.name}</p>
                <p className="text-sm text-gray-500 px-2">Quantity: {item.quantity}</p>
              </div>
            </div>
            <p className="text-md text-black mt-10 ml-4 md:ml-64">
              {item.price.toFixed(2)} <span className="text-green-300">$</span>
            </p>
          </div>
        ))}

        <hr className="border-t-2 border-black-300 mt-2" />
        <div className="flex justify-between">
          <p className="text-md font-bold text-black mt-4">Total</p>
          <p className="text-md text-black font-bold mt-4">
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}{" "}
            <span className="text-green-300">$</span>
          </p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4">
          <p className="font-bold text-black text-2xl mb-4">Contact Information</p>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="font-bold text-black text-2xl mt-6 mb-4">Shipping Address</p>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Postal Code (Optional)"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="font-bold text-black text-2xl mt-6 mb-4">Payment</p>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Pay with Card
            </label>
          </div>
          <button
            type="submit"
            className="bg-black w-full text-white font-bold py-3 rounded-lg shadow-md hover:bg-gray-800"
            disabled={isOrderProcessing}
          >
            {isOrderProcessing ? "Processing..." : "Complete Purchase"}
          </button>
          {orderSuccess && <p className="text-green-500 mt-2">{orderSuccess}</p>}
          {orderError && <p className="text-red-500 mt-2">{orderError}</p>}
        </form>
      </div>
    </div>
  );
}
