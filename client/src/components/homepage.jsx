import s2Image from "../../src/assets/s2.webp";
import s1Image from "../../src/assets/s1.webp";
import s3Image from "../../src/assets/s3.webp";
import s4Image from "../../src/assets/s4.webp";
import s5Image from "../../src/assets/s5.webp";
import s6Image from "../../src/assets/s6.webp";
import s7Image from "../../src/assets/s7.webp";
import s8Image from "../../src/assets/s8.webp";
import sc1Image from "../../src/assets/sc1.webp";
import sc2Image from "../../src/assets/sc2.webp";
import sc3Image from "../../src/assets/sc3.webp";
import sc4Image from "../../src/assets/sc4.webp";
import c1Image from "../../src/assets/c1.webp";
import c2Image from "../../src/assets/c2.webp";
import c3Image from "../../src/assets/c3.webp";
import c4Image from "../../src/assets/c4.webp";
import i1Image from "../../src/assets/i1.webp";
import i2Image from "../../src/assets/i2.webp";
import i3Image from "../../src/assets/i3.webp";
import i4Image from "../../src/assets/i4.webp";
import bgImage from "../../src/assets/bg.jpg";
import e1Image from "../../src/assets/e1.webp";
import e2Image from "../../src/assets/e2.webp";
import e3Image from "../../src/assets/e3.webp";
import e4Image from "../../src/assets/e4.webp";


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const [scarfs, setScarfs] = useState([]);
  const [caps, setCaps] = useState([]);
  const [isdals, setIsdals] = useState([]);
  const [essentials, setEssentials] = useState([]);

  // Fetch products by type
  const fetchProducts = async (type, setProducts) => {
    try {
      const response = await fetch(`http://localhost:3000/products?type=${type}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.slice(0, 4)); // Get the first 4 products
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts('Scarfs', setScarfs);
    fetchProducts('Underscarfs', setCaps);
    fetchProducts('Isdals', setIsdals);
    fetchProducts('Essentials', setEssentials);
  }, []);

  const handleViewAll = (type) => {
    navigate(`/products?type=${type}`);
  };

  return (
    <>
      <div className="pl-20 justify-center">
        {/* Hero Section */}
        <div id="exclusive" className="mt-16">
          <div
            id="custom-offerPic"
            className="border rounded-3xl overflow-hidden mt-8 relative"
            style={{
              width: "95%",
              height: "600px", // Explicit height for alignment
              borderRadius: "30px",
            }}
          >
            <img
              src={bgImage}
              alt="offer"
              className="w-full h-full object-cover"
              style={{ borderRadius: "30px", opacity: "0.7" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 text-white p-8 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-center mb-4">Empower Your Style</h1>
              <p className="text-xl text-center">
                Explore the latest hijabi fashion collection for a confident you!
              </p>
            </div>
          </div>
        </div>

        {/* Scarfs Section */}
        <div id="trend" className="mt-16">
          <div id="scarfstitle" className="text-3xl font-medium font-sans mb-2 mt-4">Scarfs</div>
          <br></br>
          <div id="scarfs" className="flex items-center">
            {scarfs.map(product => (
              <div
                key={product._id}
                className="mr-5 border-gray-300 rounded-3xl flex flex-col items-center hover:scale-105"
                style={{ width: "350px", height: "400px" }}
              >
                <Link to={`/product/${product._id}`}>
                <img src={product.image} className="rounded-3xl" alt={product.name} />
                </Link>
                <div className="p-4 text-center font-sans">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      <br></br> <br></br> <br></br>
        <div className="flex justify-center mt-4">
            <button onClick={() => handleViewAll('Scarfs')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
              View All
            </button>
          </div>
        {/* Inner Caps Section */}
        <div className="text-3xl font-medium font-sans mb-2 mt-4">Inner Caps</div>
        <br></br>
        <div id="caps" className="flex items-center">
          {caps.map(product => (
            <div
              key={product._id}
              className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:scale-105"
              style={{ width: "350px", height: "400px" }}
            >
              <Link to={`/product/${product._id}`}>
                <img src={product.image} className="rounded-3xl" alt={product.name} />
                </Link>
              <div className="p-4 text-center font-sans">
                {product.name}
              </div>
            </div>
          ))}
        </div>
        <br></br><br></br><br></br>
        <div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Underscarfs')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
        </div>

        {/* Isdals Section */}
        <div className="text-2xl font-medium font-sans mb-2 mt-4">Praying Isdal</div>
        <br></br>
        <div id="isdal" className="flex items-center">
          {isdals.map(product => (
            <div
              key={product._id}
              className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:scale-105"
              style={{ width: "350px", height: "400px" }}
            >
              <Link to={`/product/${product._id}`}>
                <img src={product.image} className="rounded-3xl" alt={product.name} />
                </Link>
              <div className="p-4 text-center font-sans">
                {product.name}
              </div>
            </div>
          ))}
        </div>
        <br></br><br></br><br></br>
        <div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Isdals')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
        </div>

        {/* Essentials Section */}
        <div className="text-2xl font-medium font-sans mb-2 mt-4">Essentials</div>
        <br></br>
        <div id="essentials" className="flex items-center">
          {essentials.map(product => (
            <div
              key={product._id}
              className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:scale-105"
              style={{ width: "350px", height: "400px" }}
            >
              <Link to={`/product/${product._id}`}>
                <img src={product.image} className="rounded-3xl" alt={product.name} />
                </Link>
              <div className="p-4 text-center font-sans">
                {product.name}
              </div>
            </div>
          ))}
        </div>
        <br></br><br></br><br></br>
        <div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Essentials')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
        </div>
      </div>
      <br></br><br></br>
    </>
  );
};

export default Header;
