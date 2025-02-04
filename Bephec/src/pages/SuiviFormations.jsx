// SuiviFormations.js
import{ useState } from "react";

const SuiviFormations = () => {
  const [suivi, setSuivi] = useState([
    { title: "Introduction à React", progress: "50%" },
    { title: "Développement Full-Stack", progress: "30%" }
  ]);

  return (
    // Idem : encadrer avec .component-box
    <div className="component-box">
      <h2>Suivi des Formations</h2>
      {suivi.length === 0 ? (
        <p>Aucune formation en cours.</p>
      ) : (
        <ul>
          {suivi.map((formation, index) => (
            <li key={index}>
              <strong>{formation.title}</strong> - Progression: {formation.progress}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuiviFormations;
