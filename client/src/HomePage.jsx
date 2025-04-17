import { useState, useEffect } from "react";
import "./style.scss";
import WordInput from "./components/wordInput.jsx";
import guessTheWord from "./components/guessTheWord.js";
import Dropdown from "./components/DropDown.jsx";
import UnikLetters from "./components/UnikLetters.jsx";

export default function HomePage() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [secretWord, setSecretWord] = useState("");
  const [wordLength, setWordLength] = useState();
  const [uniqueLetters, setUniqueLetters] = useState(false);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [playerName, setPlayerName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!wordLength) return;

    const fetchWord = async () => {
      try {
        const res = await fetch(`/api/words/${wordLength}?unique=${uniqueLetters}`);
        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) return;

        const random = data[Math.floor(Math.random() * data.length)];
        if (!random || typeof random !== "string") return;

        setSecretWord(random.toLowerCase());
        setGuesses([]);
        setGameOver(false);
        setStartTime(Date.now());
        setEndTime(null);
        setMessage("");
        console.log("Secret word fetched:", random);
      } catch (error) {
        console.error("Error fetching secret word:", error);
      }
    };

    fetchWord();
  }, [wordLength, uniqueLetters]);

  const handleGuess = (word) => {
    if (!secretWord || gameOver) return;

    const result = guessTheWord(word, secretWord);
    setGuesses([...guesses, { word, result }]);

    const allCorrect = result.every((r) => r.result === "correct");
    if (allCorrect) {
      setGameOver(true);
      setEndTime(Date.now());
      setMessage("You guessed correct!");
    }
  };

  const handleSaveScore = async () => {
    const scoreData = {
      name: playerName || "Anonym",
      guesses: guesses.length,
      time: ((endTime - startTime) / 1000).toFixed(2),
      wordLength,
      uniqueLetters,
    };

    try {
      const res = await fetch("http://localhost:5080/api/highscores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scoreData),
      });

      if (res.ok) {
        setMessage(" Highscore saved!");
        setPlayerName("");
      } else {
        setMessage(" Could not save highscore.");
      }
    } catch (err) {
      console.error(" Error:", err);
    }
  };

  return (
    <div className="homeContainer">
      <h2> Wordle Game</h2>

      <UnikLetters onToggle={setUniqueLetters} />
      <Dropdown onSelectLength={setWordLength} />

      {secretWord && !gameOver && (
        <WordInput onGuess={handleGuess} disabled={gameOver} />
      )}

      <div className="guessList">
        {guesses.map((guessData, index) => (
          <div key={index} className="wordDisplay">
            {guessData.result.map((letterData, i) => (
              <div key={i} className={`letterBox ${letterData.result}`}>
                {letterData.letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="gameResult">
          <p className="winMessage">{message}</p>
          <p> Time: {((endTime - startTime) / 1000).toFixed(2)} sek</p>
          <p> Guesses: {guesses.length}</p>

          <input
            type="text"
            placeholder="Your namn"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleSaveScore}>Save highscore</button>
        </div>
      )}
    </div>
  );
}
