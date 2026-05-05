import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";

const quizQuestions = [
  {
    question: "What type of work environment do you prefer?",
    options: ["Office-based", "Remote/Freelance", "Outdoor", "Factory/Lab"],
    emoji: "🏢",
  },
  {
    question: "Which subject do you enjoy the most?",
    options: ["Mathematics", "Science", "Arts", "Business"],
    emoji: "📚",
  },
  {
    question: "Do you prefer working with people or technology?",
    options: ["People", "Technology", "Both", "Neither"],
    emoji: "🤝",
  },
  {
    question: "What motivates you most at work?",
    options: ["Creativity", "Problem Solving", "Helping Others", "Building Things"],
    emoji: "💡",
  },
  {
    question: "What's your ideal salary priority?",
    options: ["High Salary", "Work-Life Balance", "Job Security", "Passion Over Pay"],
    emoji: "💰",
  },
];

// Career matching database
const careerDatabase = [
  {
    title: "Software Engineer",
    emoji: "💻",
    description: "Design, develop, and maintain software applications. High demand, great pay, and lots of remote opportunities.",
    skills: ["Coding", "Problem Solving", "Algorithms"],
    salary: "₹6L – ₹30L/year",
    match: (a) =>
      (a[0] === "Office-based" || a[0] === "Remote/Freelance") &&
      (a[1] === "Mathematics" || a[1] === "Science") &&
      (a[2] === "Technology" || a[2] === "Both"),
    color: "from-blue-500 to-cyan-500",
    score: (a) => {
      let s = 0;
      if (a[0] === "Remote/Freelance" || a[0] === "Office-based") s += 30;
      if (a[1] === "Mathematics") s += 30;
      if (a[2] === "Technology") s += 30;
      if (a[3] === "Problem Solving") s += 10;
      return s;
    },
  },
  {
    title: "Data Scientist",
    emoji: "📊",
    description: "Analyze complex data sets to uncover insights and help businesses make smarter decisions.",
    skills: ["Statistics", "Python/R", "Machine Learning"],
    salary: "₹8L – ₹35L/year",
    color: "from-violet-500 to-purple-600",
    score: (a) => {
      let s = 0;
      if (a[0] === "Office-based" || a[0] === "Remote/Freelance") s += 20;
      if (a[1] === "Mathematics" || a[1] === "Science") s += 35;
      if (a[2] === "Technology" || a[2] === "Both") s += 30;
      if (a[3] === "Problem Solving") s += 15;
      return s;
    },
  },
  {
    title: "UX/UI Designer",
    emoji: "🎨",
    description: "Create intuitive and beautiful digital experiences. Blend creativity with user psychology.",
    skills: ["Figma", "User Research", "Visual Design"],
    salary: "₹5L – ₹20L/year",
    color: "from-pink-500 to-rose-500",
    score: (a) => {
      let s = 0;
      if (a[0] === "Remote/Freelance" || a[0] === "Office-based") s += 20;
      if (a[1] === "Arts") s += 40;
      if (a[2] === "Both" || a[2] === "People") s += 25;
      if (a[3] === "Creativity") s += 15;
      return s;
    },
  },
  {
    title: "Doctor / Healthcare Professional",
    emoji: "🩺",
    description: "Diagnose and treat patients, make a life-changing impact in people's lives every single day.",
    skills: ["Biology", "Empathy", "Critical Thinking"],
    salary: "₹8L – ₹40L/year",
    color: "from-green-500 to-emerald-600",
    score: (a) => {
      let s = 0;
      if (a[0] === "Office-based" || a[0] === "Factory/Lab") s += 20;
      if (a[1] === "Science") s += 40;
      if (a[2] === "People" || a[2] === "Both") s += 25;
      if (a[3] === "Helping Others") s += 15;
      return s;
    },
  },
  {
    title: "Entrepreneur / Business Owner",
    emoji: "🚀",
    description: "Build your own company, create jobs, and turn your vision into a successful business.",
    skills: ["Leadership", "Risk Management", "Marketing"],
    salary: "Unlimited 🚀",
    color: "from-orange-500 to-yellow-500",
    score: (a) => {
      let s = 0;
      if (a[0] === "Remote/Freelance") s += 25;
      if (a[1] === "Business") s += 40;
      if (a[2] === "Both" || a[2] === "People") s += 20;
      if (a[3] === "Building Things") s += 15;
      return s;
    },
  },
  {
    title: "Environmental Scientist",
    emoji: "🌿",
    description: "Study and protect the environment. Work outdoors, in labs, and drive sustainable change.",
    skills: ["Biology", "Field Research", "Data Analysis"],
    salary: "₹4L – ₹15L/year",
    color: "from-teal-500 to-green-400",
    score: (a) => {
      let s = 0;
      if (a[0] === "Outdoor" || a[0] === "Factory/Lab") s += 35;
      if (a[1] === "Science") s += 35;
      if (a[2] === "Neither" || a[2] === "Both") s += 20;
      if (a[3] === "Problem Solving" || a[3] === "Helping Others") s += 10;
      return s;
    },
  },
  {
    title: "Content Creator / Writer",
    emoji: "✍️",
    description: "Tell stories, build audiences, and create content that inspires and entertains millions.",
    skills: ["Writing", "SEO", "Social Media"],
    salary: "₹3L – ₹20L/year",
    color: "from-amber-500 to-orange-400",
    score: (a) => {
      let s = 0;
      if (a[0] === "Remote/Freelance") s += 30;
      if (a[1] === "Arts") s += 35;
      if (a[2] === "People" || a[2] === "Both") s += 20;
      if (a[3] === "Creativity") s += 15;
      return s;
    },
  },
  {
    title: "Civil / Mechanical Engineer",
    emoji: "🏗️",
    description: "Design and build the infrastructure of the world — bridges, machines, cities.",
    skills: ["Physics", "CAD", "Project Management"],
    salary: "₹5L – ₹25L/year",
    color: "from-slate-500 to-gray-600",
    score: (a) => {
      let s = 0;
      if (a[0] === "Office-based" || a[0] === "Outdoor") s += 25;
      if (a[1] === "Mathematics" || a[1] === "Science") s += 35;
      if (a[2] === "Technology" || a[2] === "Both") s += 25;
      if (a[3] === "Building Things") s += 15;
      return s;
    },
  },
];

const getCareerResults = (answers) => {
  return careerDatabase
    .map((career) => ({ ...career, matchScore: career.score(answers) }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < quizQuestions.length - 1) setCurrentQ(currentQ + 1);
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    const careers = getCareerResults(answers);
    setResults(careers);
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers(Array(quizQuestions.length).fill(null));
    setSubmitted(false);
    setResults([]);
    setCurrentQ(0);
  };

  const progress = ((currentQ + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <Header />

      {!submitted ? (
        <div className="flex flex-col items-center justify-center px-4 py-16">
          {/* Progress Bar */}
          <div className="w-full max-w-2xl mb-8">
            <div className="flex justify-between text-sm text-indigo-300 mb-2">
              <span>Question {currentQ + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <div className="text-5xl mb-4 text-center">{quizQuestions[currentQ].emoji}</div>
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              {quizQuestions[currentQ].question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizQuestions[currentQ].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-6 py-4 rounded-xl text-left font-semibold transition-all duration-200 border-2 ${
                    answers[currentQ] === option
                      ? "bg-indigo-600 border-indigo-400 text-white scale-105 shadow-lg shadow-indigo-500/30"
                      : "bg-gray-700/50 border-gray-600 text-gray-200 hover:border-indigo-500 hover:bg-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handleBack}
                disabled={currentQ === 0}
                className="px-6 py-2 rounded-lg bg-gray-700 text-gray-300 font-medium disabled:opacity-30 hover:bg-gray-600 transition"
              >
                ← Back
              </button>

              {currentQ < quizQuestions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQ]}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold disabled:opacity-40 hover:scale-105 transition-transform shadow-lg"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!answers[currentQ]}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold disabled:opacity-40 hover:scale-105 transition-transform shadow-lg"
                >
                  See My Results ✨
                </button>
              )}
            </div>
          </div>

          {/* Answer Summary Dots */}
          <div className="flex gap-2 mt-6">
            {quizQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentQ
                    ? "bg-indigo-400 scale-125"
                    : answers[i]
                    ? "bg-green-400"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Results Section */
        <div className="px-4 py-16 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Career Matches
            </h2>
            <p className="text-indigo-300 text-lg">
              Based on your answers, here are your top career recommendations
            </p>
          </div>

          {/* Career Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {results.map((career, idx) => (
              <div
                key={career.title}
                className={`relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 ${
                  idx === 0 ? "md:scale-105 md:-mt-2" : ""
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    🏆 Best Match
                  </div>
                )}
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${career.color} p-6`}>
                  <div className="text-5xl mb-2">{career.emoji}</div>
                  <h3 className="text-xl font-bold text-white">{career.title}</h3>
                  {/* Match Score Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-white/80 text-xs mb-1">
                      <span>Match Score</span>
                      <span>{career.matchScore}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div
                        className="bg-white rounded-full h-1.5 transition-all duration-1000"
                        style={{ width: `${career.matchScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="bg-gray-800 p-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {career.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-gray-700 text-indigo-300 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                    <span>💼</span>
                    <span>{career.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Your Answers Summary */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-bold text-lg mb-4">📋 Your Answers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quizQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{q.emoji}</span>
                  <div>
                    <p className="text-gray-400 text-xs">{q.question}</p>
                    <p className="text-indigo-300 font-semibold text-sm">{answers[i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetake}
              className="px-8 py-4 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
            >
              🔄 Retake Quiz
            </button>
            <Link
              to="/explore"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-center hover:scale-105 transition-transform shadow-lg"
            >
              🔭 Explore All Careers
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
