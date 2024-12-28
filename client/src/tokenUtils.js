import { jwtDecode } from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem('token');
};

export const decodeToken = () => {
  const token = getToken();
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

export const getUserData = () => {
  const decoded = decodeToken();
  if (!decoded) return null;

  return {
    email: decoded.email,
    userId: decoded.uid,
    name:decoded.name,
    phone:decoded.phone,
    address:decoded.address
  };
};

export const isTokenValid = () => {
  const decoded = decodeToken();
  if (!decoded) return false;

  const currentTime = Date.now() / 1000; // Current time in seconds
  return decoded.exp > currentTime; // Check if the token is still valid
};
