function guessTheWord(guess, correctWord) {
  const result = new Array(guess.length);
  const guessLower = guess.toLowerCase();
  const correctLower = correctWord.toLowerCase();

  const letterCount = {};

  // Count all letters in the correct word
  for (let char of correctLower) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // First pass: mark correct
  for (let i = 0; i < guessLower.length; i++) {
    if (guessLower[i] === correctLower[i]) {
      result[i] = { letter: guessLower[i], result: "correct" };
      letterCount[guessLower[i]]--;
    }
  }

  // Second pass: mark misplaced/incorrect
  for (let i = 0; i < guessLower.length; i++) {
    if (!result[i]) {
      const letter = guessLower[i];
      if (letterCount[letter] && letterCount[letter] > 0) {
        result[i] = { letter, result: "misplaced" };
        letterCount[letter]--;
      } else {
        result[i] = { letter, result: "incorrect" };
      }
    }
  }

  return result;
}

export default guessTheWord;
