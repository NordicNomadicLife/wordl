import express from "express";
import Highscore from "../schema/HighscoreSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, guesses, time, wordLength, uniqueLetters } = req.body;

    if (!name || !guesses || !time || !wordLength) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const score = await Highscore.create({ name, guesses, time, wordLength, uniqueLetters });
    res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ error: "Failed to save highscore" });
  }
});

router.get("/", async (req, res) => {
  try {
    const scores = await Highscore.find().sort({ time: 1, guesses: 1 });
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch highscores" });
  }
});

export default router;
