import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams(); // Get product ID from URL parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <p className="text-base text-gray-500 mt-1">Shipping calculated at checkout.</p>

          <div className="flex items-center space-x-2 mt-4">
            <span
              className={`text-lg font-medium ${product.stock.startsWith("Low stock")
                ? "text-yellow-500"
                : product.stock.startsWith("In stock")
                ? "text-green-500"
                : "text-red-500" 
               }`}>
             {product.stock}
            </span>
          </div>

          <div className="mt-6">
            <button className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              ADD TO CART
            </button>
            <button className="w-full py-3 px-6 bg-pink-700 text-white font-semibold rounded-lg hover:bg-pink-500 transition mt-3">
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
            <strong>Dimension:</strong> {product.dimensions}
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
              Our products are made from delicate fabrics, so it’s important to handle them with care. Hand wash gently without scrubbing or twisting separately in cold water with Downy. Do not soak. Do not use bleach or shear pins when styling it. We highly recommend dry cleaning only. Due to the extreme lightness of the fabric. For spot cleaning, make sure that when the product is wet, different colors don't touch each other until it is completely dry. To avoid color transfer, iron at medium heat.
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
