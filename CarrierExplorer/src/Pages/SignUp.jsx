import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function SignUp() {
    const [isSignIn, setIsSignIn] = useState(false);
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  from-gray-700 via-black to-gray-700 ">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white bg-opacity-20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-96 text-center"
            >
                <h2 className="text-4xl font-extrabold text-black font-bold mb-4 drop-shadow-lg">
                    {isSignIn ? "Welcome Back!" : "Join Career Explorer 🚀"}
                </h2>

                {/* Social Login Buttons */}
                <div className="flex justify-center space-x-4 mb-6">
                    <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-80 transition">
                        <FaGoogle className="text-red-500 text-2xl" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-80 transition">
                        <FaFacebook className="text-blue-600 text-2xl" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-3 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-80 transition">
                        <FaGithub className="text-gray-900 text-2xl" />
                    </motion.button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {!isSignIn && (
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500 transition"
                        />
                    )}
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500 transition"
                    />
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500 transition"
                    />

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg rounded-lg transition-all"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </motion.button>
                </form>

                {/* Toggle Login/Signup */}
                <p
                    className="text-white mt-4 cursor-pointer hover:underline"
                    onClick={() => setIsSignIn(!isSignIn)}
                >
                    {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </p>

                {/* Back to Home */}
                <div className="mt-6">
                    <Link to="/" className="text-purple-500 hover:text-red-400 transition">← Back to Home</Link>
                </div>
            </motion.div>
        </div>
    );
}
