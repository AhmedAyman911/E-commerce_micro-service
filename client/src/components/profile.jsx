import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserData, isTokenValid } from '../tokenUtils.js';

const UserProfile = () => {
  const [editableUser, setEditableUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('info');

  const [user, setUser] = useState(null);
  useEffect(() => {
    const tokenIsValid = isTokenValid();
    if (tokenIsValid) {
      const userData = getUserData();
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          console.log('Sending request with userId:', user.userId);
          const response = await axios.get(`http://localhost:3000/user/${user.userId}`);
          setEditableUser(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const toggleOrderDetails = (orderId) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };


  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/orders`);
      setOrders(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setLoading(false);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'orders') {
      fetchOrders();
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/user/${user.userId}`, editableUser);
      console.log('User information updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to update user information.');
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await axios.put(`http://localhost:3000/orders/${orderId}/status`, {
        status: "canceled",
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: "canceled" } : order
        )
      );
    } catch (error) {
      console.error("Error canceling order:", error);
      alert("Failed to cancel the order.");
    }
  };

  const handleEditAddress = (orderId) => {
    const newAddress = prompt("Enter the new address:");
    if (newAddress) {
      updateOrderAddress(orderId, newAddress);
    }
  };

  const updateOrderAddress = async (orderId, newAddress) => {
    try {
      await axios.put(`http://localhost:3000/orders/${orderId}/address`, {
        address: newAddress,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, address: newAddress } : order
        )
      );
    } catch (error) {
      console.error("Error updating address:", error);
      alert("Failed to update the address.");
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!editableUser) {
    return <div>Error loading user data.</div>;
  }

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev); 
  };

  const userOrders = orders.filter((order) => order.uid === user?.userId);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <div className="text-center mb-6">
          <img
            src="https://i.pinimg.com/736x/3b/73/48/3b73483fa5af06e3ba35f4f71e541e7a.jpg"
            alt="User"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{editableUser.name}</h2>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => handleSectionChange('info')}
            className={`w-full text-left px-4 py-2 ${activeSection === 'info' ? 'bg-gray-100' : 'hover:bg-gray-100'
              } rounded-lg font-medium text-pink-700`}
          >
            Personal Information
          </button>
          <button
            onClick={() => handleSectionChange('orders')}
            className={`w-full text-left px-4 py-2 ${activeSection === 'orders' ? 'bg-gray-100' : 'hover:bg-gray-100'
              } rounded-lg font-medium text-pink-700`}
          >
            My Orders
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token'); 
              window.location.href = '/login'; 
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium text-red-700"
          >
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white shadow-lg p-6 ml-6">
        {activeSection === 'info' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-pink-700">Personal Information</h2>

            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-pink-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={editableUser.name || ''}
                onChange={handleInputChange}
                disabled={!isEditing} 
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditing ? 'bg-gray-200' : ''}`}
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-pink-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={editableUser.email || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditing ? 'bg-gray-200' : ''}`}
              />
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-pink-700">Shipping Address</label>
              <input
                type="text"
                name="address"
                value={editableUser.address || ''}
                onChange={handleInputChange}
                disabled={!isEditing} 
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditing ? 'bg-gray-200' : ''}`}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-pink-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={editableUser.phone || ''}
                onChange={handleInputChange}
                disabled={!isEditing} 
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!isEditing ? 'bg-gray-200' : ''}`}
              />
            </div>

            {/* Edit/Save Button */}
            <button
              onClick={isEditing ? handleSave : handleEditToggle}
              className="bg-pink-700 text-white px-6 py-2 rounded-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </>)}
        {activeSection === 'orders' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-pink-700">My Orders</h2>
            {userOrders.length > 0 ? (
              <div className="space-y-4">
                {userOrders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
                  >
                    {/* Order Summary */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-bold text-pink-700">Order ID: {order._id}</p>
                        <p className="text-gray-700">Total Amount: ${order.totalAmount}</p>
                        <p className="text-gray-700">Payment Method: {order.paymentMethod}</p>
                        <p className="text-gray-700">Status: {order.orderStatus}</p>
                      </div>
                      {/* Buttons Section */}
                      <div className="flex flex-col gap-2">
                        {order.orderStatus === "pending" && (
                          <>
                            <button
                              onClick={() => handleCancelOrder(order._id)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                              Cancel Order
                            </button>
                            <button
                              onClick={() => handleEditAddress(order._id)}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                              Edit Address
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => toggleOrderDetails(order._id)}
                          className="bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-pink-800"
                        >
                          {expandedOrderId === order._id ? 'Hide Details' : 'View Details'}
                        </button>
                      </div>
                    </div>

                    {/* Order Items (Expandable Section) */}
                    {expandedOrderId === order._id && (
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Items:</h3>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                            >
                              <img
                                src={item.photo}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md border border-gray-300"
                              />
                              <div className="ml-4">
                                <p className="font-bold text-gray-800">{item.name}</p>
                                <p className="text-gray-700">Quantity: {item.quantity}</p>
                                <p className="text-gray-700">Price: ${item.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-700 mt-4">
                          <strong>Shipping Address:</strong> {order.address}
                        </p>
                        <p className="text-gray-700">
                          <strong>Contact:</strong> {order.phone}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p>No orders found for your account.</p>
            )}

          </>
        )}
      </div>
    </div>
  );

};

export default UserProfile;
