/* Inputs:
    En lista med ord
    En siffra som anger önskad längd
    En indikation på huruvida samma bokstav får förekomma mer än en gång i ordet, eller om alla bokstäver måste vara unika
Funktionalitet:
    Välj slumpmässigt ut ett ord ur listan som uppfyller kriterierna i de övriga parametrarna
    Hantera på något väldefinierat sätt situationen som uppstår när inget passande ord finns
Output:
     Det slumpmässigt utvalda ordet */

const randomWord = require("./randomWord");

test("Return word with correct letters", () => {
    const words = ["STARK", "STORM", "PLANT"];
    const result = randomWord(words, 5, true);
    expect(result.length).toBe(5);
});

test("Choose only words wit unice letters", () =>{
    const words = ["APPLE", "GRAPE", "MANGO"];
    const result = randomWord(words, false);
    expect(result).toBe("No words matches");
});

test("Picks a random word from the list", () => {
    const words = ["FLOOD", "PLANT"];
    const result = randomWord(words, 5, false);
    expect(words).toContain(result); 
});