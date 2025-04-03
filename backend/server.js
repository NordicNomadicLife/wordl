import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 5080;

app.use(cors());
app.use(express.json());


const wordList = fs
  .readFileSync("words_alpha.txt", "utf-8")
  .split("\n")
  .map(word => word.trim()); // 


app.get("/api/words/:length", (req, res) => {
  const length = parseInt(req.params.length);
  const unique = req.query.unique === "true";

  const filtered = wordList
  .map(word => word.trim()) 
  .filter(word =>
    word.length === length &&
    (!unique || new Set(word).size === word.length)
  );


  res.json(filtered);
});

app.listen(PORT, () => {
  console.log( `Server running on http://localhost:${PORT}`);
});
