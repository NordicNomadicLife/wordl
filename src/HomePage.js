import { useState, useEffect } from "react";
import "./style.scss";
import WordInput from "./components/wordInput.jsx";
import guessTheWord from "./components/guessTheWord.js";
import randomWord from "./components/randomWord.js";
import Dropdown from "./components/DropDown.jsx";
import UnikLetters from "./components/UnikLetters.jsx";

export default function HomePage() {
  const [guesses, setGuesses] = useState([]); // List of all the guess word
  const handleGuess = (word) => {
    if (!secretWord) return;
    const result = guessTheWord(word, secretWord);
    setGuesses([...guesses, { word, result }]); // Add a new word to the list
  };
  const wordList = [
    "storm",
    "apple",
    "henna",
    "sloth",
    "red",
    "orange",
    "surfboard",
    "home",
  ];
  const [secretWord, setSecretWord] = useState("");
  const [wordLength, setWordLength] = useState();
  const [uniqueLetters, setUniqueLetters] = useState(false);

  useEffect(() => {
    const chosen = randomWord(wordList, wordLength, uniqueLetters);
    if (chosen !== "No words matches") {
      setSecretWord(chosen);
      setGuesses([]);
      console.log("Valt hemligt ord:", chosen);
    } else {
      console.error("Inget ord matchade kriterierna!");
    }
  }, [wordLength]);

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
