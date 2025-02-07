import { useState } from "react";

const SuiviFormations = () => {
  const [suivi, setSuivi] = useState([
    { title: "Introduction à React", progress: 50 },
    { title: "Développement Full-Stack", progress: 30 }
  ]);

  const updateProgress = (index, delta) => {
    setSuivi((prevSuivi) =>
      prevSuivi.map((formation, i) =>
        i === index
          ? { ...formation, progress: Math.min(100, Math.max(0, formation.progress + delta)) }
          : formation
      )
    );
  };

  return (
    <div className="component-box">
      <h2>Suivi des Formations</h2>
      {suivi.length === 0 ? (
        <p>Aucune formation en cours.</p>
      ) : (
        <ul>
          {suivi.map((formation, index) => (
            <li key={index}>
              <strong>{formation.title}</strong> - Progression: {formation.progress}%
              <button onClick={() => updateProgress(index, -10)}>-</button>
              <button onClick={() => updateProgress(index, 10)}>+</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuiviFormations;
