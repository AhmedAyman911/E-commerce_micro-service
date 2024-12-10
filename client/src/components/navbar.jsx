import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

export default function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="flex-col">
            <div className="flex text-xl py-1 justify-end px-12 md:px-32">
                <FaFacebook className="mr-2 hover:text-blue-700" />
                <FaInstagram className="mr-2 hover:text-red-500" />
                <FaTiktok className="hover:text-gray-700" />
            </div>
            <hr className="flex-grow border-t-2 border-black-300" />
            <div className="text-3xl relative flex items-center justify-between px-12 md:px-32">
                <TiThMenu className="hover:text-gray-700" onClick={toggleSidebar} />
                Hijabis
                <IoCartOutline className="hover:text-gray-700" />
            </div>
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-black text-white transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } w-64`}
            >
                <button
                    className="absolute top-4 right-4 text-2xl hover:text-gray-400"
                    onClick={toggleSidebar}
                >
                    &times;
                </button>
                <nav className="mt-10 space-y-4 px-4">
                    <a href="#choice1" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 1
                    </a>
                    <a href="#choice2" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 2
                    </a>
                    <a href="#choice3" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 3
                    </a>
                    <a href="#choice4" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 4
                    </a>
                    <a href="#choice5" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 5
                    </a>
                    <a href="#choice6" className="block hover:text-gray-400 text-3xl py-8">
                        Choice 6
                    </a>
                </nav>
                {/* Social Icons at the Bottom */}
                <div className="absolute bottom-4 left-0 w-full flex justify-between space-x-4 text-3xl px-8">
                    <FaFacebook className="hover:text-blue-700" />
                    <FaInstagram className="hover:text-red-500" />
                    <FaTiktok className="hover:text-gray-700" />
                </div>
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
    )
}