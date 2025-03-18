function guessTheWord(guess, correctWord) {
  let theWord = [];
  let checkedIndices = [];
  let letterCount = {};

  // First loop: check "correct" och "incorrect"
  for (let i = 0; i < guess.length; i++) {
    if (correctWord[i] === guess[i]) {
      theWord.push({ letter: guess[i], result: "correct" });
      checkedIndices.push(i);
    } else {
      theWord.push({ letter: guess[i], result: "incorrect" });
    }
  }

  // check how many times every letter are in the secret word
  for (let i = 0; i < correctWord.length; i++) {
    letterCount[correctWord[i]] = (letterCount[correctWord[i]] || 0) + 1;
  }

  // second loop: check "misplaced"
  for (let i = 0; i < guess.length; i++) {
    if (theWord[i].result === "incorrect") {
      let letter = guess[i];
      if (letterCount[letter] > 0 && !checkedIndices.includes(i)) {
        theWord[i].result = "misplaced";
        letterCount[letter]--;
      }
    }
  }

  return theWord;
}

// Exempel på körning:
console.log(guessTheWord("STORM", "STARK"));
console.log(guessTheWord("TRAKT", "STARK"));
console.log(guessTheWord("FLYGA", "STARK"));

module.exports = guessTheWord;
