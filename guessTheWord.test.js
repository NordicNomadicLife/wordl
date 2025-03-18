
const guessTheWord = require("./guessTheWord");

function runTest(testName, guess, correctWord, expected) {
    const result = guessTheWord(guess, correctWord);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
  // Här kollar jag om bokstaven är där den ska vara eller inte och då får jag passed
  //  eller failed och vid failed så visar den vad som skulle vara där och vad som är där ist
    if (passed) {
      console.log(`${testName} - Passed`);
    } else {
      console.log(`${testName} - Failed`);
      console.log(`Expected: ${JSON.stringify(expected)}`);
      console.log(`Got: ${JSON.stringify(result)}`);
    }
  }


// Test 1: Här matchar allt 
runTest('Exact match test', 'STARK', 'STARK', [
  { letter: 'S', result: 'correct' },
  { letter: 'T', result: 'correct' },
  { letter: 'A', result: 'correct' },
  { letter: 'R', result: 'correct' },
  { letter: 'K', result: 'correct' },
]);

// Test 2: här ska ingen bokstav stämma med ordet
runTest('No match test', 'BBBBB', 'STARK', [
  { letter: 'B', result: 'incorrect' },
  { letter: 'B', result: 'incorrect' },
  { letter: 'B', result: 'incorrect' },
  { letter: 'B', result: 'incorrect' },
  { letter: 'B', result: 'incorrect' },
]);

// Test 3:här är det alla utfall med
runTest('Mixed results test', 'SANDY', 'STARK', [
  { letter: 'S', result: 'correct' },
  { letter: 'A', result: 'misplaced' },
  { letter: 'N', result: 'incorrect' },
  { letter: 'D', result: 'incorrect' },
  { letter: 'Y', result: 'incorrect' },
]);