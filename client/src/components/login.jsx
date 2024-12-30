import { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import loginImage from '../assets/bwink_bld_03_single_03.jpg'; // Import your image

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);

      // Save token or redirect as needed
      localStorage.setItem('token', response.data.access_token);
      window.location.href = '/profile'; // Redirect to dashboard
    } catch (err) {
      // Handle login error
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-4/5 max-w-4xl border border-gray-200">
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src={loginImage} // Use the imported image
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Log in to access your account
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Don`t have an account?{' '}
            <a href="/signup" className="text-pink-600 underline hover:text-pink-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
