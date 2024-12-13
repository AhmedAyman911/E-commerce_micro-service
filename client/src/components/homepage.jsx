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
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
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
  <div className="text-4xl font-semibold mb-6">Sale</div>
  {/* Grid container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { src: s1Image, alt: "Chiffon Scarf", title: "Chiffon Scarf", oldPrice: "$30.00", newPrice: "$20.00" },
      { src: s2Image, alt: "Linen Scarf", title: "Linen Scarf", oldPrice: "$35.00", newPrice: "$25.00" },
      { src: s3Image, alt: "Silk Scarf", title: "Silk Scarf", oldPrice: "$50.00", newPrice: "$40.00" },
      { src: s4Image, alt: "Cotton Scarf", title: "Cotton Scarf", oldPrice: "$40.00", newPrice: "$30.00" },
      { src: s5Image, alt: "Pashmina Scarf", title: "Pashmina Scarf", oldPrice: "$60.00", newPrice: "$45.00" },
      { src: s6Image, alt: "Wool Scarf", title: "Wool Scarf", oldPrice: "$55.00", newPrice: "$42.00" },
      { src: s7Image, alt: "Polyester Scarf", title: "Polyester Scarf", oldPrice: "$25.00", newPrice: "$18.00" },
      { src: s8Image, alt: "Cashmere Scarf", title: "Cashmere Scarf", oldPrice: "$70.00", newPrice: "$55.00" },
    ].map((item, index) => (
      <div
        key={index}
        className="border rounded-lg overflow-hidden cursor-pointer relative h-full transition-transform duration-300 hover:scale-110 hover:border-pink-500"
        style={{ maxWidth: "80%" }} // Set max-width to 80% for both image and text container
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-[400px] object-cover object-top"
        />

        {/* Item Name, Price, and Button in the same section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 flex flex-col justify-center items-center" style={{ width: '100%' }}>
          <h2 className="font-semibold text-xl mb-2 text-center">{item.title}</h2>
          <div className="flex items-center space-x-2 mb-2 justify-center">
            <span className="text-gray-500 line-through text-sm">{item.oldPrice}</span>
            <span className="text-xl font-semibold text-red-600">{item.newPrice}</span>
          </div>
          <button className="py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-400 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>






      

    

     <br></br> <br></br><br></br>
     
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
      Simplicity Crinkle Satin Scarf
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc3Image} className="rounded-3xl" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
      Vibrant Vista Chiffon Scarf
      <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={sc4Image} className="rounded-3xl" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
      Vital Chiffon Scarf (Small Size)
      <br />
    </div>
  </div>
</div>

<br></br><br></br><br></br>





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






                    <div className="text-2xl font-medium font-sans mb-2 mt-4">Praying Isdal</div>
<div id="isdal" className="flex items-center">

  <div className="mr-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i1Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Plain Viscose Isdal
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i2Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Portable Isdal
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i3Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Lobed Leaves Satin Isdal
    <br />
    </div>
  </div>

  <div className="m-5 border border-gray-300 rounded-3xl flex flex-col items-center hover:border-pink-500" style={{ width: "350px", height: "400px" }}>
    <img src={i4Image} className="rounded-3xl w-full h-full object-cover" alt="Hotel Image" />
    <div className="p-4 text-center font-sans">
    Striped Viscose Isdal

      <br />
    </div>
  </div>
</div>

<br></br><br></br><br></br><br></br>


                </div>
            </div>
       </>
    );
};

export default Header;