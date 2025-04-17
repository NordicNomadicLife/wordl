import { useState } from "react";


export default function WordInput({ onGuess, disabled }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    console.log(" Guess submitted:", input);
    onGuess(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        disabled={disabled}
        placeholder="Guess a word!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={disabled}>Guess</button>
    </form>
  );
}
