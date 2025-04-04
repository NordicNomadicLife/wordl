import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5080;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wordList = fs
  .readFileSync("words_alpha.txt", "utf-8")
  .split("\n")
  .map(word => word.trim());

app.get("/api/words/:length", (req, res) => {
  const length = parseInt(req.params.length);
  const unique = req.query.unique === "true";

  const filtered = wordList
    .filter(word =>
      word.length === length &&
      (!unique || new Set(word).size === word.length)
    );

  res.json(filtered);
});

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
