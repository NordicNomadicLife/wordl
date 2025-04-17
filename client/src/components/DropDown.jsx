import { useState } from "react";

export default function Dropdown({ onSelectLength }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedOption(value);
    onSelectLength(value);
  };

  return (
    <div className="dropdownMeny">
      <label>Choose number of letter: </label>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Choose --</option>
        {[...Array(14)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
