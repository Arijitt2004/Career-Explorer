import React, { useState } from "react";
import Header from "../Component/Header";
import { Link } from "react-router-dom";

const careers = [
    { title: "AI Engineer", category: "Technology", description: "Develop AI models and machine learning solutions.", icon: "🧠",
      skills: ["Python", "TensorFlow", "Machine Learning", "Math"], salary: "₹10L – ₹40L/year",
      roadmap: ["Learn Python & Math", "Study ML algorithms", "Build ML projects", "Learn deep learning frameworks", "Apply for roles"],
      companies: ["Google", "OpenAI", "Microsoft", "Amazon"], growth: "⬆️ Very High" },

    { title: "Cloud Architect", category: "Technology", description: "Design and manage cloud infrastructure solutions.", icon: "☁️",
      skills: ["AWS/Azure/GCP", "Networking", "Security", "DevOps"], salary: "₹12L – ₹45L/year",
      roadmap: ["Learn networking basics", "Get AWS/Azure certified", "Study cloud architecture", "Work on cloud projects", "Lead cloud migration"],
      companies: ["AWS", "Microsoft", "Google", "IBM"], growth: "⬆️ Very High" },

    { title: "DevOps Engineer", category: "Technology", description: "Streamline development and operations processes.", icon: "🔄",
      skills: ["Docker", "Kubernetes", "CI/CD", "Linux"], salary: "₹8L – ₹30L/year",
      roadmap: ["Learn Linux & scripting", "Study CI/CD pipelines", "Master Docker & K8s", "Learn monitoring tools", "Get certified"],
      companies: ["Netflix", "Atlassian", "Red Hat", "GitLab"], growth: "⬆️ High" },

    { title: "Blockchain Developer", category: "Technology", description: "Build decentralized applications and smart contracts.", icon: "⛓️",
      skills: ["Solidity", "Ethereum", "Web3.js", "Cryptography"], salary: "₹8L – ₹35L/year",
      roadmap: ["Learn blockchain basics", "Study Ethereum & Solidity", "Build smart contracts", "Learn DeFi protocols", "Deploy dApps"],
      companies: ["Coinbase", "Polygon", "Binance", "Chainlink"], growth: "⬆️ High" },

    { title: "Content Strategist", category: "Marketing", description: "Plan and manage content creation across platforms.", icon: "📝",
      skills: ["SEO", "Content Writing", "Analytics", "Social Media"], salary: "₹4L – ₹18L/year",
      roadmap: ["Learn writing & grammar", "Study SEO fundamentals", "Build a content portfolio", "Analyze content metrics", "Lead content teams"],
      companies: ["HubSpot", "Buffer", "BuzzFeed", "Contently"], growth: "⬆️ Moderate" },

    { title: "Social Media Manager", category: "Marketing", description: "Manage brand presence across social platforms.", icon: "📱",
      skills: ["Instagram", "Meta Ads", "Analytics", "Copywriting"], salary: "₹3L – ₹15L/year",
      roadmap: ["Learn each social platform", "Study paid advertising", "Build brand campaigns", "Analyze performance data", "Grow community"],
      companies: ["Meta", "Twitter", "Hootsuite", "Sprout Social"], growth: "⬆️ Moderate" },

    { title: "UX Designer", category: "Design", description: "Create intuitive user experiences for digital products.", icon: "🖌️",
      skills: ["Figma", "User Research", "Prototyping", "Wireframing"], salary: "₹5L – ₹22L/year",
      roadmap: ["Learn design principles", "Master Figma/Adobe XD", "Conduct user research", "Build UX portfolio", "Work on real products"],
      companies: ["Google", "Apple", "Airbnb", "Figma"], growth: "⬆️ High" },

    { title: "Product Designer", category: "Design", description: "Design physical and digital products from concept to production.", icon: "🎯",
      skills: ["Product Thinking", "Figma", "Design Systems", "User Testing"], salary: "₹7L – ₹28L/year",
      roadmap: ["Learn UX fundamentals", "Study product strategy", "Build design systems", "Test with real users", "Launch products"],
      companies: ["Uber", "Spotify", "Notion", "Linear"], growth: "⬆️ High" },

    { title: "Nurse Practitioner", category: "Healthcare", description: "Provide advanced nursing care and treatment.", icon: "💊",
      skills: ["Patient Care", "Medical Knowledge", "Empathy", "Diagnosis"], salary: "₹5L – ₹20L/year",
      roadmap: ["Get nursing degree", "Pass NCLEX exam", "Gain clinical experience", "Specialize in a field", "Advance to NP role"],
      companies: ["Apollo", "Fortis", "AIIMS", "Max Healthcare"], growth: "⬆️ High" },

    { title: "Physical Therapist", category: "Healthcare", description: "Help patients recover mobility and manage pain.", icon: "🏃",
      skills: ["Anatomy", "Rehabilitation", "Patient Communication", "Exercise Science"], salary: "₹4L – ₹16L/year",
      roadmap: ["Get a BPT degree", "Complete clinical internship", "Get licensed", "Specialize in area", "Open own practice"],
      companies: ["Manipal Hospital", "Medanta", "Physiotherapy Clinics"], growth: "⬆️ Moderate" },

    { title: "Civil Engineer", category: "Engineering", description: "Design and supervise infrastructure projects.", icon: "🌉",
      skills: ["AutoCAD", "Structural Analysis", "Project Management", "Math"], salary: "₹5L – ₹20L/year",
      roadmap: ["Get B.Tech Civil Engg", "Learn AutoCAD & Revit", "Work on real projects", "Get licensed", "Lead large projects"],
      companies: ["L&T", "NHAI", "Tata Projects", "DLF"], growth: "⬆️ Moderate" },

    { title: "Biomedical Engineer", category: "Engineering", description: "Develop medical devices and healthcare technologies.", icon: "🦾",
      skills: ["Biology", "Electronics", "3D Modeling", "FDA Regulations"], salary: "₹5L – ₹22L/year",
      roadmap: ["Get BME degree", "Learn medical device design", "Understand regulations", "Work in R&D", "Innovate medical solutions"],
      companies: ["Medtronic", "Siemens Healthineers", "Philips"], growth: "⬆️ High" },

    { title: "Investment Banker", category: "Finance", description: "Advise on mergers, acquisitions, and capital raising.", icon: "💹",
      skills: ["Financial Modeling", "Valuation", "Excel", "Communication"], salary: "₹10L – ₹60L/year",
      roadmap: ["Get Finance/MBA degree", "Learn financial modeling", "Intern at a bank", "Get CFA certified", "Advance to Associate/VP"],
      companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Kotak"], growth: "⬆️ High" },

    { title: "Risk Manager", category: "Finance", description: "Identify and mitigate financial risks for organizations.", icon: "🛡️",
      skills: ["Risk Analysis", "Statistics", "Excel", "Regulatory Knowledge"], salary: "₹7L – ₹30L/year",
      roadmap: ["Study Finance/Statistics", "Get FRM certification", "Learn risk frameworks", "Work in banking/insurance", "Advance to CRO"],
      companies: ["HDFC Bank", "ICICI", "Deloitte", "PwC"], growth: "⬆️ Moderate" },

    { title: "Video Producer", category: "Design", description: "Create visual content for various media platforms.", icon: "🎥",
      skills: ["Premiere Pro", "After Effects", "Storytelling", "Color Grading"], salary: "₹3L – ₹18L/year",
      roadmap: ["Learn video editing basics", "Master Adobe Premiere", "Build a portfolio", "Work on branded content", "Build own production house"],
      companies: ["YouTube", "Netflix", "Amazon Prime", "TVF"], growth: "⬆️ Moderate" },

    { title: "Game Developer", category: "Technology", description: "Design and program interactive video games.", icon: "🎮",
      skills: ["Unity/Unreal", "C#/C++", "Game Design", "3D Modeling"], salary: "₹5L – ₹25L/year",
      roadmap: ["Learn a game engine (Unity)", "Study C# scripting", "Build small games", "Publish on app stores", "Join a game studio"],
      companies: ["Ubisoft", "EA Games", "Nazara", "SuperGaming"], growth: "⬆️ High" },

    { title: "Software Engineer", category: "Technology", description: "Develop and maintain software applications.", icon: "💻",
      skills: ["Data Structures", "Algorithms", "System Design", "Git"], salary: "₹6L – ₹30L/year",
      roadmap: ["Learn a programming language", "Study DSA", "Build projects", "Clear coding interviews", "Get your first job"],
      companies: ["Google", "Microsoft", "Amazon", "Flipkart"], growth: "⬆️ Very High" },

    { title: "Data Scientist", category: "Technology", description: "Analyze and interpret complex data to aid decision-making.", icon: "📊",
      skills: ["Python", "SQL", "Statistics", "Power BI/Tableau"], salary: "₹8L – ₹35L/year",
      roadmap: ["Learn Python & SQL", "Study statistics", "Work on Kaggle datasets", "Build dashboards", "Apply to data roles"],
      companies: ["Netflix", "Zomato", "Paytm", "CRED"], growth: "⬆️ Very High" },

    { title: "Digital Marketer", category: "Marketing", description: "Use online strategies to promote products and services.", icon: "📈",
      skills: ["Google Ads", "SEO", "Email Marketing", "Analytics"], salary: "₹4L – ₹20L/year",
      roadmap: ["Learn SEO & SEM", "Get Google Ads certified", "Run campaigns", "Analyze ROI", "Lead marketing teams"],
      companies: ["HubSpot", "Zoho", "Myntra", "Swiggy"], growth: "⬆️ High" },

    { title: "Graphic Designer", category: "Design", description: "Create visually appealing designs for branding and media.", icon: "🎨",
      skills: ["Photoshop", "Illustrator", "Typography", "Color Theory"], salary: "₹3L – ₹15L/year",
      roadmap: ["Learn design fundamentals", "Master Adobe Suite", "Build a portfolio", "Freelance projects", "Work at agencies/studios"],
      companies: ["Canva", "Adobe", "Design agencies", "Startups"], growth: "⬆️ Moderate" },

    { title: "Cybersecurity Analyst", category: "Technology", description: "Protect organizations from cyber threats and attacks.", icon: "🛡️",
      skills: ["Network Security", "Ethical Hacking", "SIEM", "Linux"], salary: "₹7L – ₹30L/year",
      roadmap: ["Learn networking basics", "Study cybersecurity fundamentals", "Get CompTIA Security+", "Practice on CTFs", "Join a SOC team"],
      companies: ["IBM", "Palo Alto", "CrowdStrike", "Wipro"], growth: "⬆️ Very High" },

    { title: "Doctor", category: "Healthcare", description: "Diagnose and treat medical conditions.", icon: "⚕️",
      skills: ["Medicine", "Clinical Skills", "Patient Communication", "Research"], salary: "₹8L – ₹40L/year",
      roadmap: ["Clear NEET exam", "Complete MBBS (5.5 yrs)", "Complete internship", "Get PG specialization", "Practice independently"],
      companies: ["AIIMS", "Apollo", "Fortis", "Own Practice"], growth: "⬆️ Stable" },

    { title: "Financial Analyst", category: "Finance", description: "Guide businesses in making financial decisions.", icon: "💰",
      skills: ["Excel", "Financial Modeling", "CFA", "Valuation"], salary: "₹6L – ₹25L/year",
      roadmap: ["Study Finance/Accounting", "Learn financial modeling", "Get CFA Level 1", "Work in equity research", "Advance to senior analyst"],
      companies: ["HDFC", "Motilal Oswal", "EY", "Deloitte"], growth: "⬆️ High" },
];

const categories = ["All", "Technology", "Marketing", "Design", "Healthcare", "Engineering", "Finance"];
const categoryIcons = { All: "🌐", Technology: "💻", Marketing: "📈", Design: "🎨", Healthcare: "⚕️", Engineering: "🏗️", Finance: "💰" };
const categoryColors = { Technology: "from-blue-600 to-cyan-500", Marketing: "from-orange-500 to-yellow-400", Design: "from-pink-500 to-rose-400", Healthcare: "from-green-500 to-emerald-400", Engineering: "from-slate-500 to-gray-400", Finance: "from-violet-500 to-purple-400", All: "from-indigo-500 to-purple-500" };

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCareer, setSelectedCareer] = useState(null);

    const filteredCareers = careers.filter(
        (career) =>
            (selectedCategory === "All" || career.category === selectedCategory) &&
            career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
            <Header />

            {/* Hero Section */}
            <div className="relative text-center pt-28 pb-16 px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
                    Discover Your Future
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Explore career paths that match your passion and skills. Click <strong className="text-purple-400">Learn More</strong> on any card for a full roadmap.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="container mx-auto px-4 mb-10">
                <div className="bg-gray-800/70 backdrop-blur rounded-2xl border border-gray-700 p-5">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search careers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                            <span className="absolute left-4 top-3.5 text-xl">🔍</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                        selectedCategory === cat
                                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                                >
                                    {categoryIcons[cat]} {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Cards Grid */}
            <div className="container mx-auto px-4 pb-20">
                {filteredCareers.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCareers.map((career, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/60 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Card top gradient bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${categoryColors[career.category] || categoryColors.All}`} />
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-4xl">{career.icon}</span>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">{career.title}</h3>
                                            <span className="text-xs px-2 py-0.5 bg-purple-900/60 text-purple-300 rounded-full">{career.category}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{career.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-green-400 text-sm font-semibold">💼 {career.salary}</span>
                                        <button
                                            onClick={() => setSelectedCareer(career)}
                                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold hover:scale-105 transition-transform shadow-md"
                                        >
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">😕</div>
                        <h3 className="text-2xl text-gray-300 mb-2">No careers found</h3>
                        <p className="text-gray-500">Try adjusting your search filters</p>
                    </div>
                )}
            </div>

            {/* ── Career Detail Modal ── */}
            {selectedCareer && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={() => setSelectedCareer(null)}
                >
                    <div
                        className="relative bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className={`bg-gradient-to-br ${categoryColors[selectedCareer.category] || categoryColors.All} p-8 rounded-t-3xl`}>
                            <button
                                onClick={() => setSelectedCareer(null)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition"
                            >
                                ✕
                            </button>
                            <div className="text-6xl mb-3">{selectedCareer.icon}</div>
                            <h2 className="text-3xl font-bold text-white">{selectedCareer.title}</h2>
                            <p className="text-white/80 mt-2">{selectedCareer.description}</p>
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium">💼 {selectedCareer.salary}</span>
                                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium">{selectedCareer.growth} Growth</span>
                                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium">🏷️ {selectedCareer.category}</span>
                            </div>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Required Skills */}
                            <div>
                                <h3 className="text-white font-bold text-lg mb-3">🛠️ Required Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCareer.skills.map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-indigo-900/60 border border-indigo-700 text-indigo-300 rounded-xl text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Career Roadmap */}
                            <div>
                                <h3 className="text-white font-bold text-lg mb-4">🗺️ Career Roadmap</h3>
                                <div className="space-y-3">
                                    {selectedCareer.roadmap.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br ${categoryColors[selectedCareer.category] || categoryColors.All} shrink-0`}>
                                                {i + 1}
                                            </div>
                                            <div className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-300 text-sm">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Top Companies */}
                            <div>
                                <h3 className="text-white font-bold text-lg mb-3">🏢 Top Hiring Companies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCareer.companies.map((co) => (
                                        <span key={co} className="px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 rounded-xl text-sm">
                                            {co}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 pt-2">
                                <Link
                                    to="/quiz"
                                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-center hover:scale-105 transition-transform shadow-lg"
                                >
                                    🎯 Take Career Quiz
                                </Link>
                                <button
                                    onClick={() => setSelectedCareer(null)}
                                    className="px-6 py-3 rounded-xl bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Explore;