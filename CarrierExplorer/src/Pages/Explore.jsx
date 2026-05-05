import React, { useState } from "react";
import Header from "../Component/Header";

const careers = [
    // Technology
    
    { title: "AI Engineer", category: "Technology", description: "Develop AI models and machine learning solutions.", icon: "🧠" },
    { title: "Cloud Architect", category: "Technology", description: "Design and manage cloud infrastructure solutions.", icon: "☁️" },
    { title: "DevOps Engineer", category: "Technology", description: "Streamline development and operations processes.", icon: "🔄" },
    { title: "Blockchain Developer", category: "Technology", description: "Build decentralized applications and smart contracts.", icon: "⛓️" },
    
    // Marketing
    { title: "Content Strategist", category: "Marketing", description: "Plan and manage content creation across platforms.", icon: "📝" },
    { title: "Social Media Manager", category: "Marketing", description: "Manage brand presence across social platforms.", icon: "📱" },
    
    // Design
    { title: "UX Designer", category: "Design", description: "Create intuitive user experiences for digital products.", icon: "🖌️" },
    { title: "Product Designer", category: "Design", description: "Design physical and digital products from concept to production.", icon: "🎯" },
    
    // Healthcare
    { title: "Nurse Practitioner", category: "Healthcare", description: "Provide advanced nursing care and treatment.", icon: "💊" },
    { title: "Physical Therapist", category: "Healthcare", description: "Help patients recover mobility and manage pain.", icon: "🏃♂️" },
    
    // Engineering
    { title: "Civil Engineer", category: "Engineering", description: "Design and supervise infrastructure projects.", icon: "🌉" },
    { title: "Biomedical Engineer", category: "Engineering", description: "Develop medical devices and healthcare technologies.", icon: "🦾" },
    
    // Finance
    { title: "Investment Banker", category: "Finance", description: "Advise on mergers, acquisitions, and capital raising.", icon: "💹" },
    { title: "Risk Manager", category: "Finance", description: "Identify and mitigate financial risks for organizations.", icon: "🛡️" },
    
    // Creative
    { title: "Video Producer", category: "Design", description: "Create visual content for various media platforms.", icon: "🎥" },
    { title: "Game Developer", category: "Technology", description: "Design and program interactive video games.", icon: "🎮" },
    
    // Emerging Fields
    { title: "AR/VR Developer", category: "Technology", description: "Create immersive augmented/virtual reality experiences.", icon: "👓" },
    { title: "Ethical Hacker", category: "Technology", description: "Test systems security through controlled attacks.", icon: "🕵️♂️" },
    
    // Existing entries
    { title: "Software Engineer", category: "Technology", description: "Develop and maintain software applications.", icon: "💻" },
    { title: "Data Scientist", category: "Technology", description: "Analyze and interpret complex data to aid decision-making.", icon: "📊" },
    { title: "Digital Marketer", category: "Marketing", description: "Use online strategies to promote products and services.", icon: "📈" },
    { title: "Graphic Designer", category: "Design", description: "Create visually appealing designs for branding and media.", icon: "🎨" },
    { title: "Cybersecurity Analyst", category: "Technology", description: "Protect organizations from cyber threats and attacks.", icon: "🛡️" },
    { title: "Doctor", category: "Healthcare", description: "Diagnose and treat medical conditions.", icon: "⚕️" },
    { title: "Psychologist", category: "Healthcare", description: "Help individuals improve their mental well-being.", icon: "🧠" },
    { title: "Architect", category: "Engineering", description: "Design and oversee the construction of buildings.", icon: "🏗️" },
    { title: "Mechanical Engineer", category: "Engineering", description: "Develop and test mechanical devices and systems.", icon: "⚙️" },
    { title: "Financial Analyst", category: "Finance", description: "Guide businesses in making financial decisions.", icon: "💰" }
];

const categories = ["All", "Technology", "Marketing", "Design", "Healthcare", "Engineering", "Finance"];

const categoryIcons = {
    All: "🌐",
    Technology: "💻",
    Marketing: "📈",
    Design: "🎨",
    Healthcare: "⚕️",
    Engineering: "🏗️",
    Finance: "💰"
};

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCareers = careers.filter(
        (career) =>
            (selectedCategory === "All" || career.category === selectedCategory) &&
            career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-700 via-black to-gray-700">
            <Header />

            {/* Hero Section */}
            <div className="relative text-center pt-28 pb-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-10"></div>
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 animate-slide-in">
                    Discover Your Future
                </h1>
                <p className="text-xl text-purple-500 font-bold max-w-2xl mx-auto mb-8">
                    Explore career paths that match your passion and skills. Find your perfect fit in our curated collection.
                </p>
            </div>

            {/* Search and Filter Section */}
            <div className="container mx-auto px-4 mb-12 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-lg border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search careers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                            />
                            <span className="absolute left-4 top-3.5 text-gray-500 text-xl">🔍</span>
                        </div>

                        <div className="relative">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full md:w-64 pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-purple-500 focus:bg-white appearance-none transition-all"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute left-4 top-3.5 text-gray-500 text-xl">
                                {categoryIcons[selectedCategory]}
                            </span>
                            <span className="absolute right-4 top-4 text-gray-500">▼</span>
                        </div>
                    </div>

                    {/* Mobile Category Chips */}
                    <div className="mt-4 flex flex-wrap gap-2 md:hidden">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                                    selectedCategory === category
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                <span>{categoryIcons[category]}</span>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Career Cards Grid */}
            <div className="container mx-auto px-4 pb-16">
                {filteredCareers.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCareers.map((career, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
                            >
                                <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-2xl text-white shadow-lg">
                                    {career.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">{career.title}</h3>
                                <p className="text-gray-600 mb-4">{career.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                        {career.category}
                                    </span>
                                    <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2">
                                        Learn More
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">😕</div>
                        <h3 className="text-2xl text-gray-800 mb-2">No careers found</h3>
                        <p className="text-gray-600">Try adjusting your search filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explore;