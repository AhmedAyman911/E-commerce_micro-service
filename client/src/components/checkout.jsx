<<<<<<< HEAD
import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="flex flex-col md:flex-row items-start justify-center w-full px-12 md:px-32 py-8">
      {/* Left Section: Checkout Details */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <p className="font-bold text-black text-3xl">Checkout</p>
        <hr className="border-t-2 border-black-300 mt-2" />
        <div className="flex justify-between py-4">
          <div className="flex">
            <img
              className="w-24 h-24 object-cover rounded-md border border-gray-300 p-1"
              src="https://media.almostmakesperfect.com/wp-content/uploads/2021/02/16135359/lesgamines-e1613749471710.jpg"
              alt="item image"
            />
            <div className="flex-col">
              <p className="text-md text-black px-2 mt-10"> Product name</p>
              <p className="text-sm text-gray-500 px-2"> Color</p>
            </div>
          </div>
          <p className="text-md text-black mt-10 ml-4 md:ml-64"> 123.99 <span className="text-green-300">$</span></p>
        </div>
        <hr className="border-t-2 border-black-300 mt-2" />
        <div className="flex justify-between">
          <p className="text-md font-bold text-black mt-4"> Total</p>
          <p className="text-md text-black font-bold mt-4"> 123.99 <span className="text-green-300">$</span></p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 px-4 md:px-8">
        <form className="flex flex-col gap-4">
          <p className="font-bold text-black text-2xl mb-4">Contact Information</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="font-bold text-black text-2xl mt-6 mb-4">Shipping Address</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Postal Code (Optional)"
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

          {paymentMethod === "card" && (
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-black w-full text-white font-bold py-3 rounded-lg shadow-md hover:bg-gray-800">
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
=======
export default function Checkout() {
    return (
      <h1 className="text-3xl font-bold underline">
        welcome to the project girls 
      </h1>
    )
  }
>>>>>>> 59a14dd (Homepage, login, signup)
