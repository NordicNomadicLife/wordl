import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import HighScore from "./pages/highScore.jsx";
import Info from "./pages/info.jsx";

export default function App() {
  return (
    <Router>
      <h1 className="introName">Welcome to Wordl!</h1>
      <nav className="navbar">
        <Link to="/">The Game</Link>
        <Link to="/highscore">HighScore</Link>
        <Link to="/info">Info</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/highscore" element={<HighScore />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}
