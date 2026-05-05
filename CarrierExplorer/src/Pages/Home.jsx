import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Loader from "./Loader"; // Ensure correct path

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gradient-to-r  from-gray-700 via-black to-gray-700 min-h-screen flex flex-col">
          <Header />

          {/* Hero Section */}
          <header className="flex flex-col items-center justify-center text-center text-white min-h-screen px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold opacity-0 animate-fade-in">
              Discover Your Dream Career 🚀
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Find the best career path tailored just for you.
            </p>
            <Link to="/explore">
              <button className="mt-6 px-6 py-3 text-lg font-semibold from-gray-700 via-black to-gray-700 text-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-700 hover:text-white">
                Start Exploring
              </button>
            </Link>
          </header>

          {/* Features Section */}
          <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-20">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-5xl font-extrabold text-purple-400 tracking-wide">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Explore the key benefits that make Career Explorer the perfect choice for your future.
              </p>

              <div className="grid md:grid-cols-3 gap-10 mt-12">
                {/* Feature Cards */}
                {[
                  {
                    title: "Career Guidance",
                    description: "Personalized recommendations based on your skills and interests.",
                    icon: "🎯",
                  },
                  {
                    title: "Expert Mentors",
                    description: "Learn from industry professionals with years of experience.",
                    icon: "👨‍🏫",
                  },
                  {
                    title: "Job Assistance",
                    description: "Get access to exclusive job opportunities and internships.",
                    icon: "💼",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
                  >
                    <span className="text-5xl">{feature.icon}</span>
                    <h3 className="mt-4 text-3xl font-bold text-purple-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-lg">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Testimonials Section */}
          <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-20">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-5xl font-extrabold tracking-wide text-purple-400">
                What Our Users Say
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Real stories from people who found success with Career Explorer.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {/* Testimonial Cards */}
                {[
                  {
                    quote: "Career Explorer helped me find the perfect career path!",
                    name: "Alex Johnson",
                  },
                  {
                    quote: "The best platform for career guidance. Highly recommended!",
                    name: "Sarah Lee",
                  },
                  {
                    quote: "Amazing resources and expert advice. 10/10 experience!",
                    name: "David Smith",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                  
                    className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
                  >
                    <p className="italic text-xl font-semibold text-white">
                      “{testimonial.quote}”
                    </p>
                    <h4 className="mt-4 font-bold text-purple-400">- {testimonial.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Footer Section */}
          <footer className="bg-gray-900 text-gray-300 py-6 text-center">
            <p>© 2024 Career Explorer. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default HomePage;
