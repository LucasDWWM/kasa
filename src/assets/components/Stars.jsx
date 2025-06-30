import React from "react";
import "@/assets/styles/Stars.scss";

// Composant Stars : affiche une note en étoiles
function Stars({ rating }) {

// Nombre total d'étoiles à afficher (toujours 5) (int)
  const totalStars = 5;
  
// Tableau qui contiendra les étoiles à afficher
  const stars = [];

  // Boucle pour générer les 5 étoiles
  for (let i = 1; i <= totalStars; i++) {
    // On ajoute une étoile (élément <span>) dans le tableau "stars"
    stars.push(
        // key : Clé unique requise par React pour chaque élément dans une liste /Si l'index est inférieur ou égal à la note : étoile remplie, sinon vide
      <span key={i} className={`star ${i <= rating ? "filled" : "empty"}`}>
        ★
      </span>
    );
  }

  return <div className="stars">{stars}</div>;
}

export default Stars;
