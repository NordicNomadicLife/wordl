import { useEffect, useState } from "react";
import "./../style.scss";

export default function HighscorePage() {
  const [highscores, setHighscores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHighscores = async () => {
      try {
        const res = await fetch("/api/highscores");
        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error("Could not get info from API");
        }

        setHighscores(data);
        setLoading(false);
      } catch (err) {
        console.error(" Highscore fetch error:", err);
        setError("Could not fetch highscore.");
        setLoading(false);
      }
    };

    fetchHighscores();
  }, []);

  return (
    <div className="highscoreContainer">
      <h2>🏆 Highscorelista</h2>

      {loading && <p>Loading highscore...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && highscores.length === 0 && (
        <p>No highscores yet – You need to play!</p>
      )}

      {!loading && highscores.length > 0 && (
        <table className="highscoreTable">
          <thead>
            <tr>
              <th>Plats</th>
              <th>Namn</th>
              <th>Number of letters</th>
              <th>Unika letters</th>
              <th>Number of guesses</th>
              <th>Time in seconds</th>
            </tr>
          </thead>
          <tbody>
            {highscores.map((score, index) => (
              <tr key={score._id || index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.wordLength}</td>
                <td>{score.uniqueLetters ? "Yes" : "No"}</td>
                <td>{score.guesses}</td>
                <td>{parseFloat(score.time).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
