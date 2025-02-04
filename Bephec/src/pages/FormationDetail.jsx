import React from "react";
import { useParams } from "react-router-dom";

const formations = {
  1: {
    title: "Introduction à React",
    description: "Apprenez les bases de React.",
    price: "100€",
    duration: "10h",
    trainers: ["Jean Dupont", "Alice Martin"],
  },
  2: {
    title: "Développement Full-Stack",
    description: "Maîtrisez le développement full-stack.",
    price: "200€",
    duration: "20h",
    trainers: ["Marie Curie", "Alan Turing"],
  },
  3: {
    title: "UX/UI Design",
    description: "Les fondamentaux du design d'interface.",
    price: "150€",
    duration: "15h",
    trainers: ["Leonardo Da Vinci", "Steve Jobs"],
  },
  4: {
    title: "Python pour Data Science",
    description: "Utilisez Python pour analyser des données.",
    price: "180€",
    duration: "25h",
    trainers: ["Guido van Rossum", "Grace Hopper"],
  },
  5: {
    title: "Gestion de Projet Agile",
    description: "Comprenez les méthodes Agile et Scrum.",
    price: "130€",
    duration: "8h",
    trainers: ["Henry Ford", "Tim Cook"],
  },
  6: {
    title: "Machine Learning avancé",
    description: "Approfondissez vos connaissances en ML.",
    price: "250€",
    duration: "30h",
    trainers: ["Andrew Ng", "Yoshua Bengio"],
  },
  7: {
    title: "Marketing Digital",
    description: "Boostez votre présence en ligne.",
    price: "120€",
    duration: "10h",
    trainers: ["Seth Godin", "Neil Patel"],
  },
  8: {
    title: "Cybersécurité essentielle",
    description: "Apprenez les bases de la cybersécurité.",
    price: "170€",
    duration: "12h",
    trainers: ["Kevin Mitnick", "Eugene Kaspersky"],
  },
  9: {
    title: "Développement Mobile",
    description: "Créez des applications mobiles natives.",
    price: "220€",
    duration: "18h",
    trainers: ["Linus Torvalds", "James Gosling"],
  },
};

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formations[id];

  if (!formation) {
    return <h2>Formation non trouvée</h2>;
  }

  // Exemple de fonction de gestion du clic sur le bouton Acheter
  const handleAcheter = () => {
    // Ici, tu peux rediriger vers une page d'achat, ajouter l'article à un panier, etc.
    alert(`Vous avez choisi d'acheter la formation: ${formation.title}`);
  };

  return (
    <div className="component-box">
      <div className="container">
        <h2>{formation.title}</h2>
        <p>{formation.description}</p>
        <p>
          <strong>Durée:</strong> {formation.duration}
        </p>
        <p>
          <strong>Prix:</strong> {formation.price}
        </p>
        <h3>Formateurs:</h3>
        <ul>
          {formation.trainers.map((trainer, index) => (
            <li key={index}>{trainer}</li>
          ))}
        </ul>

        <button className="btn-acheter" onClick={handleAcheter}>
          Acheter
        </button>
      </div>
    </div>
  );
};

export default FormationDetail;
