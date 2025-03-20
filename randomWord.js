function randomWord(wordList, length, uniqueLetters) {
    // Filter words with correct number of letters
    let filteredWords = wordList.filter(word => word.length === length);

    // Filter for unice letters
    if (uniqueLetters) {
        filteredWords = filteredWords.filter(word => new Set(word).size === word.length);
    }

    // Deal if no words matches
    if (filteredWords.length === 0) {
        return "No words matches"; 
    }

    // Randomise a word from the list
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

module.exports = randomWord;