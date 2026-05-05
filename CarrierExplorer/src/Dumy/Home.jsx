// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="bg-white shadow-lg p-4 fixed w-full z-50">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           <h1 className="text-3xl font-extrabold text-purple-600 cursor-pointer hover:bg-purple-500 hover:px-4 hover:py-2 hover:text-white transition-all duration-300 rounded-lg">
//             Career Explorer 🚀
//           </h1>
//           <div className="space-x-6">
//             <Link to="/" className="text-gray-800 text-lg hover:text-purple-600 transition-all duration-200">
//               Home
//             </Link>
//             <Link to="/about" className="text-gray-800 text-lg hover:text-purple-600 transition-all duration-200">
//               About
//             </Link>
//             <Link to="/contact" className="text-gray-800 text-lg hover:text-purple-600 transition-all duration-200">
//               Contact
//             </Link>
//             <Link to="/explore">
//               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300">
//                 Get Started
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="flex flex-col items-center justify-center text-center text-white min-h-screen px-6">
//         <h1 className="text-5xl md:text-7xl font-extrabold opacity-0 animate-fade-in">
//           Discover Your Dream Career 🚀
//         </h1>
//         <p className="mt-4 text-lg md:text-xl">Find the best career path tailored just for you.</p>
//         <Link to="/explore">
//           <button className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-700 hover:text-white">
//             Start Exploring
//           </button>
//         </Link>
//       </header>

//       {/* Features Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
//           <div className="grid md:grid-cols-3 gap-8 mt-8">
//             {/* Feature 1 */}
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition">
//               <h3 className="text-2xl font-bold text-purple-600">Career Guidance</h3>
//               <p className="text-gray-700 mt-2">Personalized recommendations based on your skills and interests.</p>
//             </div>
//             {/* Feature 2 */}
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition">
//               <h3 className="text-2xl font-bold text-purple-600">Expert Mentors</h3>
//               <p className="text-gray-700 mt-2">Learn from industry professionals with years of experience.</p>
//             </div>
//             {/* Feature 3 */}
//             <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition">
//               <h3 className="text-2xl font-bold text-purple-600">Job Assistance</h3>
//               <p className="text-gray-700 mt-2">Get access to exclusive job opportunities and internships.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="bg-purple-600 text-white py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold">What Our Users Say</h2>
//           <div className="grid md:grid-cols-2 gap-8 mt-8">
//             {/* Testimonial 1 */}
//             <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
//               <p className="italic">"Career Explorer helped me find the perfect career path!"</p>
//               <h4 className="mt-2 font-bold text-purple-600">- Alex Johnson</h4>
//             </div>
//             {/* Testimonial 2 */}
//             <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
//               <p className="italic">"The best platform for career guidance. Highly recommended!"</p>
//               <h4 className="mt-2 font-bold text-purple-600">- Sarah Lee</h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-gray-300 py-6 text-center">
//         <p>© 2024 Career Explorer. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;