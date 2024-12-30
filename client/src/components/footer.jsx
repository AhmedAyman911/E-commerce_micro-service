import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Press Center</a></li>
                            <li><a href="#" className="hover:underline">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Customer Service</a></li>
                            <li><a href="#" className="hover:underline">Partner Help</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Safety Resource Center</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Help Center</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://www.facebook.com/your-page" className="hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={24} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/your-profile" className="hover:text-red-400" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={24} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@your-username" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center border-t border-gray-700 py-2">
                    <p className="text-gray-500 text-sm">&copy; 2024 Hijabis. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
