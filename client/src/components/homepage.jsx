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
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  // Function to navigate to the Products page with the selected type
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
              <h1 className="text-4xl font-bold text-center mb-4">
                Empower Your Style
              </h1>
              <p className="text-xl text-center">
                Explore the latest hijabi fashion collection for a confident
                you!
              </p>
            </div>
          </div>
        </div>

 {/* Sale Section */}
<div id="trend" className="mt-16">
     
     <div id="scarfstitle" className="text-3xl font-medium font-sans mb-2 mt-4">Scarfs</div>
<div id="scarfs" className="flex items-center">

  <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc1Image} className="rounded-3xl" alt="chiffon" />
    <div className="p-4 text-center font-sans">
      Leopard Luxe Chiffon Scarf
      <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc2Image} className="rounded-3xl" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Bubble Chiffon Scarf
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc3Image} className="rounded-3xl" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Chiffon Crinkle Scarf
      <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc4Image} className="rounded-3xl" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Printed Cotton Square Scarf
      <br />
    </div>
  </div>
  
</div>
<br></br><br></br><br></br>
<div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Scarfs')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
      </div>
                    <div className="text-3xl font-medium font-sans mb-2 mt-4">Inner Caps</div>
                    <div id="caps" className="flex items-center">

                        <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
                            <img src={c1Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
                            <div className="p-4 text-center font-sans">
                            No Thread Underscarf
                            <br />
                            </div>
                        </div>

                        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
                            <img src={c2Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
                            <div className="p-4 text-center font-sans">
                            No Thread Underscarf with Tie-Back
                                <br />
                              
                            </div>
                        </div>

                        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
                            <img src={c3Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
                            <div className="p-4 text-center font-sans">
                            Syrian Underscarf Open-End
                            <br />
                              
                            </div>
                        </div>

                        <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
                            <img src={c4Image} className="rounded-3xl w-full h-full" alt="Hotel Image" />
                            <div className="p-4 text-center font-sans">
                            Cotton Kuwaiti Underscarf
                            <br />
                               
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Underscarfs')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
      </div>
                    <div className="text-2xl font-medium font-sans mb-2 mt-4">Praying Isdal</div>
<div id="isdal" className="flex items-center">

  <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i1Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Leaflet Isdal 2 pcs
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i2Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Authentic Blue Satin Isdal
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i3Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Black Flowers Satin Isdal
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i4Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Plain Viscose Isdal
      <br />
    </div>
  </div>
</div>
<br></br><br></br>
<div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Isdals')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
      </div>
      <br></br>
      <div className="text-2xl font-medium font-sans mb-2 mt-4">Essentials</div>
<div id="isdal" className="flex items-center">

  <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={e1Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Pin Box
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={e2Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Double Sided Tape
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={e3Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Scarf Straightener
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={e4Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Matte Magnet Pin
      <br />
    </div>
  </div>
</div>
<br></br><br></br>
<div className="flex justify-center mt-4">
          <button onClick={() => handleViewAll('Essentials')} className="py-4 px-8 bg-pink-700 text-white font-semibold rounded-2xl hover:bg-pink-400">
            View All
          </button>
      </div>
      <br></br><br></br>

                </div>
            </div>
       </>
    );
};

export default Header;