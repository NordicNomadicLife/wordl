import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  guesses: { type: Number, required: true },
  time: { type: Number, required: true },
  wordLength: { type: Number, required: true },
  uniqueLetters: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Highscore || mongoose.model("Highscore", highscoreSchema);
