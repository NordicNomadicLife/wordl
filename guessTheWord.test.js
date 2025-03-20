//Jag gjorde testen efter jag hade skrivt koden men inför nästa ska 
//jag testa att göra testen först och koden efter.


const guessTheWord = require("./guessTheWord");


// Test 1: Här matchar allt 
test("Exact match test", () => {
  expect(guessTheWord("STARK", "STARK")).toEqual([
    { letter: "S", result: "correct" },
    { letter: "T", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "R", result: "correct" },
    { letter: "K", result: "correct" },
  ]);
});

// Test 2: här ska ingen bokstav stämma med ordet
test("No match test", () => {
  expect(guessTheWord("BBBBB", "STARK")).toEqual([
    { letter: "B", result: "incorrect" },
    { letter: "B", result: "incorrect" },
    { letter: "B", result: "incorrect" },
    { letter: "B", result: "incorrect" },
    { letter: "B", result: "incorrect" },
  ]);
});

// Test 3:här är det alla utfall med
test("Mixed results test", () => {
  expect(guessTheWord("SANDY", "STARK")).toEqual([
    { letter: "S", result: "correct" },
    { letter: "A", result: "misplaced" },
    { letter: "N", result: "incorrect" },
    { letter: "D", result: "incorrect" },
    { letter: "Y", result: "incorrect" },
  ]);
});