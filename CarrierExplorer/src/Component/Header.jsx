import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 w-full z-50">

            <div className="container mx-auto flex justify-between items-center p-4">

                {/* Brand Logo */}
                <h1 className="text-3xl font-extrabold text-purple-600 cursor-pointer transition-all hover:bg-purple-500 hover:p-3 hover:rounded-lg hover:text-white">
                    Career Explorer
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-800 font-medium transition hover:text-purple-600 hover:text-xl">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 font-medium transition hover:text-purple-600 hover:text-xl">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-800 font-medium transition hover:text-purple-600 hover:text-xl">
                        Contact
                    </Link>
                    <Link to="/signup" className="text-gray-800 font-medium transition hover:text-purple-600 hover:text-xl"> 
                        Sign up
                    </Link>
                    <Link to="/explore">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                            Get Started 🚀
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden bg-white shadow-md p-4 space-y-4 absolute w-full transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <Link to="/" className="block text-gray-800 font-medium transition hover:text-purple-600">
                    Home
                </Link>
                <Link to="/about" className="block text-gray-800 font-medium transition hover:text-purple-600">
                    About
                </Link>
                <Link to="/contact" className="block text-gray-800 font-medium transition hover:text-purple-600">
                    Contact
                </Link>
                <Link to="/signup" className="text-gray-800 font-medium transition hover:text-purple-600 hover:text-xl"> 
                        Sign up
                </Link>
                <Link to="/explore">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                        Get Started 🚀
                    </button>
                </Link>
            </div>
        </nav>
    );
}
