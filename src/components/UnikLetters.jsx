import { useState } from "react";

export default function UnikLetters({ onToggle }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onToggle(event.target.checked);
  };

  return (
    <div className="unikLettersCheckbox">
      <label>
        Unik letters:
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </label>
    </div>
  );
}
