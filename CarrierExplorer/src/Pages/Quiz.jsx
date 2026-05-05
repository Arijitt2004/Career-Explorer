import { useState } from "react";

const quizQuestions = [
  {
    question: "What type of work environment do you prefer?",
    options: ["Office-based", "Remote/Freelance", "Outdoor", "Factory/Lab"],
  },
  {
    question: "Which subject do you enjoy the most?",
    options: ["Mathematics", "Science", "Arts", "Business"],
  },
  {
    question: "Do you prefer working with people or technology?",
    options: ["People", "Technology", "Both", "Neither"],
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Career Quiz</h1>
      {!submitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          {quizQuestions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-semibold">{q.question}</p>
              {q.options.map((option) => (
                <button
                  key={option}
                  className={`block w-full text-left px-4 py-2 mt-2 rounded ${
                    answers[index] === option ? "bg-green-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handleSelect(index, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold">Thank you for completing the quiz!</h2>
          <p className="mt-2 text-gray-600">We are analyzing your answers to suggest careers...</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
