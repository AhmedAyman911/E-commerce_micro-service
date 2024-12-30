import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsSidebarOpen(false); // Close sidebar after navigation
    };

    const openExternalLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="flex-col">
            <div className="flex text-xl py-1 justify-end px-12 md:px-32">
                <FaFacebook
                    className="mr-2 hover:text-blue-700 cursor-pointer"
                    onClick={() => openExternalLink("https://www.facebook.com/share/JAfuMBDmibbtorpX/?mibextid=wwXIfr")}
                />
                <FaInstagram
                    className="mr-2 hover:text-red-500 cursor-pointer"
                    onClick={() => openExternalLink("https://www.instagram.com/levoilestores/profilecard/?igsh=OThybzNuOW04djNo")}
                />
                <FaTiktok
                    className="hover:text-gray-700 cursor-pointer"
                    onClick={() => openExternalLink("https://www.tiktok.com/@le.voile.stores?_t=8sdAQyKUY91&_r=1")}
                />
            </div>
            <hr className="flex-grow border-t-2 border-black-300" />
            <div className="text-3xl relative flex items-center justify-between px-12 md:px-32">
                <TiThMenu className="hover:text-gray-700 cursor-pointer" onClick={toggleSidebar} />
                Hijabis
                <IoCartOutline
                    className="hover:text-gray-700 cursor-pointer"
                    onClick={() => handleNavigation("/cart")}
                />
            </div>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-300 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } w-64`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl hover:text-gray-400"
                    onClick={toggleSidebar}
                >
                    &times;
                </button>
                <nav className="mt-10 space-y-4 px-4">
                    <button
                        onClick={() => handleNavigation("/")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavigation("/products")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Our Products
                    </button>
                    <button
                        onClick={() => handleNavigation("/products?type=Scarfs")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Scarfs
                    </button>
                    <button
                        onClick={() => handleNavigation("/products?type=Underscarfs")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Inner caps
                    </button>
                    <button
                        onClick={() => handleNavigation("/products?type=Isdals")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Praying Isdals
                    </button>
                    <button
                        onClick={() => handleNavigation("/products?type=Essentials")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Essentials
                    </button>
                    <button
                        onClick={() => handleNavigation("/login")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        Login/Sign up
                    </button>
                    <button
                        onClick={() => handleNavigation("/Profile")}
                        className="block hover:text-gray-400 text-3xl py-8 text-left w-full"
                    >
                        My profile
                    </button>
                </nav>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    style={{ left: "16rem" }}
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}