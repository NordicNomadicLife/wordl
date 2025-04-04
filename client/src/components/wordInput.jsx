import { useState } from "react";

export default function WordInput({ onGuess }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      onGuess(input); 
      setInput(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Guess a word!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Guess</button>
    </form>
  );
}
