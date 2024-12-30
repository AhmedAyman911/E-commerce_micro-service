import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint = type
          ? `http://localhost:3000/products?type=${type}`
          : `http://localhost:3000/products`;
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold px-4 py-2">
          {type ? `${type}` : 'All Products'}
        </h2>
        <br></br>
        {loading ? (
          <p className="text-gray-700">Loading products...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div
              key={product._id}
              className="group border rounded-lg p-4 bg-gray-50 hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-pink-500"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover"
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-base text-gray-800">{product.price}</p>
              </Link>
            </div>
            
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No products available for this type.</p>
        )}
      </div>
    </div>
  );
}
