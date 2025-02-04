import { Link } from "react-router-dom";

const formations = [
  { id: 1, title: "Introduction à React", description: "Apprenez les bases de React.", price: "100k€" },
  { id: 2, title: "Développement Full-Stack", description: "Maîtrisez le développement full-stack.", price: "200k€" },
  { id: 3, title: "UX/UI Design", description: "Les fondamentaux du design d'interface.", price: "150k€" },
  { id: 4, title: "Python pour Data Science", description: "Utilisez Python pour analyser des données.", price: "180k€" },
  { id: 5, title: "Gestion de Projet Agile", description: "Comprenez les méthodes Agile et Scrum.", price: "130k€" },
  { id: 6, title: "Machine Learning avancé", description: "Approfondissez vos connaissances en ML.", price: "250k€" },
  { id: 7, title: "Marketing Digital", description: "Boostez votre présence en ligne.", price: "120k€" },
  { id: 8, title: "Cybersécurité essentielle", description: "Apprenez les bases de la cybersécurité.", price: "170k€" },
  { id: 9, title: "Développement Mobile", description: "Créez des applications mobiles natives.", price: "220k€" }
];

const Home = () => {
  return (
    <div className="component-box">
      <h2>Liste des Formations</h2>
      <div className="formations-list">
        {formations.map(formation => (
          <div key={formation.id} className="formation-item">
            <h3>{formation.title}</h3>
            <p>{formation.description}</p>
            <span>{formation.price}</span>
            <br />
            <Link to={`/formation/${formation.id}`}>Voir Détails</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
