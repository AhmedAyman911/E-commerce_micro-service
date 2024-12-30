import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserData, isTokenValid } from "../tokenUtils.js";
import axios from "axios";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenIsValid = isTokenValid();
    if (tokenIsValid) {
      const userData = getUserData();
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    if (!user) {
      alert("Please log in to add to cart.");
      return;
    }
    const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
    const payload = {
      productId: product._id,
      name: product.name,
      quantity: 1,
      price: numericPrice,
      photo: product.image,
    };

    console.log("Sending payload:", payload);

    try {
      const response = await axios.put(
        `http://localhost:3000/cart/${user.userId}/update`,
        payload
      );

      console.log("Response from server:", response.data);
      // Show snackbar on successful addition
      setSnackbarVisible(true);
      setTimeout(() => setSnackbarVisible(false), 3000);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error status:", error.response.status);
        alert(`Failed to add product to cart: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("Failed to add product to cart: No response from server.");
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred.");
      }
    }
  };

  const buyItNow = async () => {
    await addToCart();
    navigate("/checkout");
  };

  if (loading) {
    return <p className="text-gray-700 text-center">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-gray-700 text-center">Product not found.</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-800 mt-4">{product.price}</p>

          <div className="flex items-center space-x-2 mt-4">
            <span
              className={`text-lg font-medium ${product.stock.startsWith("Low stock")
                  ? "text-yellow-500"
                  : product.stock.startsWith("In stock")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
            >
              {product.stock.startsWith("Low stock")
                ? `${product.stock} ${product.n_items} items left`
                : product.stock}
            </span>
          </div>

          <div className="mt-6">
            <button
              className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              onClick={addToCart}
            >
              ADD TO CART
            </button>
            {snackbarVisible && (
              <div
                className="fixed top-16 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md animate-fade-in-out"
              >
                Added to cart successfully!
              </div>
            )}
            <button
              className="w-full py-3 px-6 bg-pink-700 text-white font-semibold rounded-lg hover:bg-pink-500 transition mt-3"
              onClick={buyItNow}
            >
              BUY IT NOW
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-8 space-y-4">
            {product.material && (
              <p className="text-gray-800 text-lg">
                <strong>Material:</strong> {product.material}
              </p>
            )}
            {product.dimensions && (
              <p className="text-gray-800 text-lg">
                <strong>Dimensions:</strong> {product.dimensions}
              </p>
            )}
          </div>

          {/* Accordion Section */}
          <div className="mt-6">
            <details className="group border-t border-gray-300">
              <summary className="px-4 py-2 text-lg font-medium cursor-pointer group-hover:text-pink-700">
                FABRIC CARE
              </summary>
              <div className="px-4 py-2 text-gray-700 text-base">
                Our products are made from delicate fabrics, so it’s important to handle them with care. Hand wash gently without scrubbing or twisting separately in cold water with Downy. Do not soak. Do not use bleach or shear pins when styling it. We highly recommend dry cleaning only. Due to the extreme lightness of the fabric. For spot cleaning, make sure that when the product is wet, different colors don`t touch each other until it is completely dry. To avoid color transfer, iron at medium heat.
              </div>
            </details>
            <details className="group border-t border-gray-300">
              <summary className="px-4 py-2 text-lg font-medium cursor-pointer group-hover:text-pink-700">
                RETURN & EXCHANGE
              </summary>
              <div className="px-4 py-2 text-gray-700 text-base">
                We accept returns/refunds within 14 days from the date of purchase with the purchase receipt.
              </div>
            </details>
            <details className="group border-t border-gray-300">
              <summary className="px-4 py-2 text-lg font-medium cursor-pointer group-hover:text-pink-700">
                SHIPPING & DELIVERY
              </summary>
              <div className="px-4 py-2 text-gray-700 text-base">
                Shipping within 3-5 working days (Weekends excluded)
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
