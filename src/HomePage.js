import { useState, useEffect } from "react";
import "./style.scss";
import WordInput from "./components/wordInput.jsx";
import guessTheWord from "./components/guessTheWord.js";
import Dropdown from "./components/DropDown.jsx";
import UnikLetters from "./components/UnikLetters.jsx";

export default function HomePage() {
  const [guesses, setGuesses] = useState([]); // List of all the guess word
  const handleGuess = (word) => {
    if (!secretWord) return;
    const result = guessTheWord(word, secretWord);
    setGuesses([...guesses, { word, result }]); // Add a new word to the list
  };
  
  const [secretWord, setSecretWord] = useState("");
  const [wordLength, setWordLength] = useState();
  const [uniqueLetters, setUniqueLetters] = useState(false);

  useEffect(() => {
    if (!wordLength) return;

    const fetchWord = async () => {
      try {
        const res = await fetch(`http://localhost:5080/api/words/${wordLength}?unique=${uniqueLetters}`);
        const data = await res.json();
  
        if (!Array.isArray(data) || data.length === 0) {
          console.error("No words match critheria!");
          return;
        }
  
        const random = data[Math.floor(Math.random() * data.length)];
  
        if (!random || typeof random !== "string") {
          console.error(" no valid word from API:", random);
          return;
        }
  
        setSecretWord(random.toLowerCase());
        setGuesses([]);
        console.log(" secret word from API:", random);
      } catch (err) {
        console.error(" wrong with API-call:", err);
      }
    };
    fetchWord();
  }, [wordLength, uniqueLetters]);
  
   
  return (
    <div className="homeContainer">
      <h2>Lets play!</h2>
      <UnikLetters onToggle={setUniqueLetters} />
      <Dropdown onSelectLength={setWordLength} />
      <WordInput onGuess={handleGuess} />

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
    </div>
  );
}
