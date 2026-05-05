// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Quiz from "./Pages/Quiz";
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Loader from "./Pages/Loader";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Loader" element={<Loader />} />
      <Route path="/about" element={<About />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
