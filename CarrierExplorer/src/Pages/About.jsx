// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto px-5 py-10 font-sans">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white px-4 py-20 rounded-xl mb-16 text-center">
//                 <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                     About Career Compass
//                 </h1>
//                 <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
//                     Empowering individuals to navigate their professional journey with confidence and clarity
//                 </p>
//             </section>

//             {/* Mission Section */}
//             <section className="mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
//                     Our Mission
//                 </h2>
//                 <div className="prose prose-lg text-slate-600 mx-auto max-w-3xl text-center leading-relaxed">
//                     <p>
//                         At Career Compass, we believe everyone deserves to find fulfilling work that aligns with
//                         their passions, skills, and values. Our AI-powered platform combines cutting-edge
//                         technology with expert career guidance to help you discover your ideal career path.
//                     </p>
//                 </div>
//             </section>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//                 <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition-shadow">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">🌟 Personalized Assessment</h3>
//                     <p className="text-gray-600">Advanced AI analysis of your skills, interests, and personality traits</p>
//                 </div>
//                 <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition-shadow">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">📈 Career Roadmap</h3>
//                     <p className="text-gray-600">Step-by-step guidance to achieve your professional goals</p>
//                 </div>
//                 <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition-shadow">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">🎓 Skill Development</h3>
//                     <p className="text-gray-600">Curated learning resources tailored to your chosen path</p>
//                 </div>
//             </div>

//             {/* How It Works */}
//             <section className="my-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
//                     How It Works
//                 </h2>
//                 <div className="flex flex-wrap justify-center gap-12">
//                     <div className="max-w-xs text-center">
//                         <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full text-2xl font-bold mb-6">
//                             1
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-3">Take Assessment</h3>
//                         <p className="text-gray-600">Complete our comprehensive career quiz</p>
//                     </div>
//                     {/* Add more steps similarly */}
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="text-center mt-20">
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
//                     Ready to Start Your Journey?
//                 </h2>
//                 <Link
//                     to="/assessment"
//                     className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg 
//                     hover:bg-indigo-700 transition-colors duration-300 text-lg
//                     shadow-lg hover:shadow-xl"
//                 >
//                     Discover Your Path Now →
//                 </Link>
//             </section>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import { Link } from 'react-router-dom';
import { RocketLaunchIcon, SparklesIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid';
import Header from '../Component/Header';


const About = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-gradient-to-r  from-gray-700 via-black to-gray-700">
            <Header />
            {/* Hero Section with Floating Animation */}
            <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 rounded-2xl mb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]"></div>
                <div className="relative max-w-4xl mx-auto px-4 text-center animate-float">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">
                        About Career Compass
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                        Where <span className="font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Passion</span> Meets{' '}
                        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Profession</span>
                    </p>
                </div>
            </section>

            {/* Mission Section with Parallax Effect */}
            <section className="mb-28 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-12 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                        Our Mission
                    </h2>
                    <div className="prose prose-lg text-slate-600 dark:text-slate-300 mx-auto max-w-4xl text-center leading-relaxed space-y-6">
                        <p className="text-xl">
                            We're revolutionizing career guidance through <span className="font-semibold text-indigo-600">AI-powered insights</span> and{' '}
                            <span className="font-semibold text-purple-600">human expertise</span>. Our platform acts as your personal career architect,
                            blending cutting-edge technology with psychological principles to map your ideal professional journey.
                        </p>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-full">
                            <HeartIcon className="w-6 h-6 text-pink-500" />
                            <span className="font-medium text-indigo-700">95% User Satisfaction Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                {[
                    { icon: SparklesIcon, title: 'AI-Powered Matching', color: 'from-purple-500 to-indigo-500' },
                    { icon: ChartBarIcon, title: 'Career Analytics', color: 'from-blue-500 to-cyan-500' },
                    { icon: AcademicCapIcon, title: 'Learning Paths', color: 'from-green-500 to-emerald-500' },
                ].map((feature, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`}></div>
                        <feature.icon className={`w-12 h-12 mb-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            {idx === 0 && 'Deep learning algorithms analyze 50+ career factors'}
                            {idx === 1 && 'Real-time market trends and salary predictions'}
                            {idx === 2 && 'Personalized courses and certification tracking'}
                        </p>
                    </div>
                ))}
            </div>

            {/* How It Works Timeline */}
            <section className="my-28">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    Your Success Blueprint
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 transform -translate-x-1/2"></div>
                    {[1, 2, 3, 4].map((step) => (
                        <div
                            key={step}
                            className={`mb-16 flex ${step % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-between`}
                        >
                            <div className="w-5/12 px-4 py-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-3">Step {step}</h3>
                                <p className="text-slate-200 dark:text-white">
                                    {step === 1 && 'Complete our interactive assessment'}
                                    {step === 2 && 'Receive personalized career matches'}
                                    {step === 3 && 'Build your development roadmap'}
                                    {step === 4 && 'Launch your career transformation'}
                                </p>
                            </div>
                            <div className="w-1/12 flex justify-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-indigo-900 text-white rounded-full text-2xl font-bold shadow-lg">
                                    {step}
                                </div>
                            </div>
                            <div className="w-5/12"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="my-28 bg-gradient-to-br from-indigo-50 to-purple-50 py-20 rounded-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-900">
                    Success Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[1, 2, 3].map((_, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <UserGroupIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Sarah Johnson</h4>
                                    <p className="text-sm text-slate-500">Product Manager @Google</p>
                                </div>
                            </div>
                            <p className="text-slate-600">
                                "Career Compass completely transformed my career trajectory. The personalized roadmap helped me make strategic moves I never would have considered!"
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section with Gradient Glow */}
            <section className="text-center my-32 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white dark:bg-slate-900 py-16 px-8 rounded-2xl shadow-2xl">
                    <RocketLaunchIcon className="w-24 h-24 mb-8 mx-auto text-indigo-600" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                        Launch Your Dream Career
                    </h2>
                    <Link
                        to="/assessment"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                      rounded-xl text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg
                      hover:shadow-xl"
                    >
                        Start Free Assessment
                        <SparklesIcon className="w-6 h-6 animate-bounce" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;


// G-NEWPT


// import React from "react";

// const About = () => {
//     return (
//         <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 min-h-screen flex flex-col items-center justify-center">

//             {/* Hero Section */}
//             <header className="text-center max-w-4xl">
//                 <h1 className="text-5xl font-extrabold text-purple-600 mb-4 bg-black rounded p-6">
//                     About <span className="text-pink-500">Career Explorer</span>
//                 </h1>
//                 <p className="text-lg text-gray-700 font-black">
//                     Your ultimate destination for career guidance, mentorship, and growth opportunities.
//                     Let’s build your dream career together! 🚀
//                 </p>
//             </header>

//             {/* Mission, Vision, and Values Section */}
//             <section className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl text-center">

//                 <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
//                     <h2 className="text-2xl font-bold text-purple-600">🎯 Our Mission</h2>
//                     <p className="mt-2 text-gray-600">Empowering individuals to make informed career choices and achieve success.</p>
//                 </div>

//                 <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
//                     <h2 className="text-2xl font-bold text-purple-600">🚀 Our Vision</h2>
//                     <p className="mt-2 text-gray-600">To be the world’s most trusted career exploration platform.</p>
//                 </div>

//                 <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
//                     <h2 className="text-2xl font-bold text-purple-600">💡 Our Values</h2>
//                     <p className="mt-2 text-gray-600">Innovation, Integrity, Inclusion, and Impact.</p>
//                 </div>

//             </section>

//             {/* Team Section */}
//             <section className="mt-16 max-w-5xl text-center">
//                 <h2 className="text-4xl font-bold text-purple-600">Meet Our Experts</h2>
//                 <div className="grid md:grid-cols-3 gap-8 mt-8">
//                     <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
//                         <h3 className="text-xl font-bold text-pink-500">John Doe</h3>
//                         <p className="text-gray-700 mt-1">Career Coach</p>
//                     </div>
//                     <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
//                         <h3 className="text-xl font-bold text-pink-500">Sarah Lee</h3>
//                         <p className="text-gray-700 mt-1">Industry Expert</p>
//                     </div>
//                     <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition">
//                         <h3 className="text-xl font-bold text-pink-500">Mark Smith</h3>
//                         <p className="text-gray-700 mt-1">Mentorship Director</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Call to Action */}
//             <section className="mt-12">
//                 <h2 className="text-3xl font-semibold text-gray-800">Start Your Journey with Us</h2>
//                 <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transition">
//                     Join Now 🚀
//                 </button>
//             </section>

//             {/* Footer */}
//             <footer className="mt-16 text-gray-500 text-center">
//                 <p>© 2024 Career Explorer. All Rights Reserved.</p>
//             </footer>

//         </div>
//     );
// };

// export default About;
