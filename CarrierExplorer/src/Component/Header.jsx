import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">

        {/* Brand Logo */}
        <Link to="/">
          <h1 className="text-3xl font-extrabold text-purple-600 cursor-pointer transition-all hover:bg-purple-500 hover:px-3 hover:py-1 hover:rounded-lg hover:text-white">
            Career Explorer
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 font-medium transition hover:text-purple-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 font-medium transition hover:text-purple-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-800 font-medium transition hover:text-purple-600">
            Contact
          </Link>

          {user ? (
            /* Logged-in state */
            <div className="flex items-center gap-3">
              {/* Avatar + Name */}
              <div className="flex items-center gap-2">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-purple-500"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-gray-700 font-semibold text-sm">
                  Hi, {user.name.split(" ")[0]}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold text-red-500 border border-red-300 rounded-lg hover:bg-red-50 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            /* Logged-out state */
            <Link to="/signup" className="text-gray-800 font-medium transition hover:text-purple-600">
              Sign Up
            </Link>
          )}

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
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden bg-white shadow-md p-4 space-y-4 absolute w-full transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-purple-600">
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-purple-600">
          About
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-purple-600">
          Contact
        </Link>

        {user ? (
          <div className="space-y-2">
            <p className="text-gray-700 font-semibold">👋 Hi, {user.name}</p>
            <button onClick={handleLogout} className="w-full text-left text-red-500 font-medium hover:text-red-700">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block text-gray-800 font-medium hover:text-purple-600">
            Sign Up
          </Link>
        )}

        <Link to="/explore" onClick={() => setIsOpen(false)}>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
            Get Started 🚀
          </button>
        </Link>
      </div>
    </nav>
  );
}
