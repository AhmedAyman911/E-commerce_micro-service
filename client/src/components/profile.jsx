import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Maryam",
    email: "Maryam@example.com",
    address: "123 Main St, Springfield, USA",
    card: "Card ending in 1234"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignOut = () => {
    // Add sign-out logic here
    console.log("User signed out");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <div className="text-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
        <nav className="space-y-4 ">
          <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg font-medium text-pink-700">Personal Information</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium text-pink-700">My Orders</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white shadow-lg p-6 ml-6">
        <h2 className="text-2xl font-bold mb-6 text-pink-700">Personal Information</h2>

        {/* Editable Name Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-pink-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact Information Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-pink-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-pink-700">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-pink-700">Credit Card Number</label>
          <input
            type="text"
            name="address"
            value={user.card}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
