export default function InfoPage() {
  return (
    <div className="infoContainer">
      <h2> Om projektet</h2>

      <p>
        Detta är ett webbaserat Wordle-inspirerat spel byggt som skolprojekt. Spelet går ut på att gissa ett hemligt ord, bokstav för bokstav, med feedback efter varje gissning.
      </p>

      <h3> De tekniker jag har använt är</h3>
      <ul>
        <li><strong>Frontend:</strong> React (Vite)</li>
        <li><strong>Backend:</strong> Node.js (Express)</li>
        <li><strong>Databas:</strong> MongoDB (Atlas)</li>
      </ul>

      <h3> De funktioner som finns implementerade</h3>
      <ul>
        <li>Slumpade ord med valfri längd</li>
        <li>Val om ordet ska ha unika bokstäver eller inte</li>
        <li>Feedback på varje bokstav: korrekt, fel plats eller fel. Där de blir gröna, gula eller röda</li>
        <li>Ett high score-system där man kan se ditt namn, din tid och antal gissningar</li>
        <li>High Score-listan visas i en tabell sorterad på tid på en sida som är SSR</li>
      </ul>

      <h3> Utvecklare</h3>
      <p>
        Projektet är skapat av Pelle som en del av en skoluppgift i programmering. Syftet var att kombinera fullstack kunskap med problemlösning och UI-design.
      </p>
    </div>
  );
}
