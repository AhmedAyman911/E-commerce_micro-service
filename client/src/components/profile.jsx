import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserData, isTokenValid } from '../tokenUtils.js';



const UserProfile = () => {
  const [editableUser, setEditableUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); 
  // get info from token
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!editableUser) {
    return <div>Error loading user data.</div>;
  }
  
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev); // Toggle the edit mode
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
          <h2 className="text-xl font-semibold">{editableUser.name}</h2>
        </div>
        <nav className="space-y-4">
          <button className="w-full text-left px-4 py-2 bg-gray-100 rounded-lg font-medium text-pink-700">
            Personal Information
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium text-pink-700">
            My Orders
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('token'); // Clear token
              window.location.href = '/login'; // Redirect to login page
            }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium text-red-700"
          >
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white shadow-lg p-6 ml-6">
        <h2 className="text-2xl font-bold mb-6 text-pink-700">Personal Information</h2>

        {/* Full Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-pink-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={editableUser.name || ''}
            onChange={handleInputChange}
            disabled={!isEditing} // Disable when not editing
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
            disabled={!isEditing} // Disable when not editing
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
            disabled={!isEditing} // Disable when not editing
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
            disabled={!isEditing} // Disable when not editing
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
      </div>
    </div>
  );

};

export default UserProfile;
