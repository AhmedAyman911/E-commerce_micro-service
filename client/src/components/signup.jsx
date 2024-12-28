import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../assets/bwink_bld_03_single_03.jpg';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(''); // State to store error message
  const [success, setSuccess] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Make the API call to signup endpoint
      const response = await axios.post('http://localhost:3000/auth/signup', {
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        name: formData.name,
      });

      // Handle success
      setSuccess('Account created successfully!');
      setError(''); // Clear error message
      console.log('Response:', response.data);
    } catch (err) {
      // Handle error
      setError(err.response?.data?.message || 'An error occurred during signup');
      setSuccess(''); // Clear success message
      console.error('Error:', err);
    }
    // Add your form submission logic here
    console.log('Form Submitted:', formData);
    setError(''); // Clear error if passwords match
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex w-4/5 max-w-4xl">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src={loginImage} // Use the imported image
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Create an Account
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Sign up to start your journey
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="block w-full pl-3 pr-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Create a password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="Confirm your password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Success Message */}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-md text-lg font-semibold border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-white underline hover:text-gray-400">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
