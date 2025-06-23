import { useParams } from "react-router-dom";
import logements from "@/data/logements.json";
import Gallery from "@/assets/components/Gallery";
import Collapse from "@/assets/components/Collapse";
import Stars from "@/assets/components/Stars";

// Composant Logements : page de détail pour un logement
function Logements() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const logement = logements.find((item) => item.id === id); // Cherche le logement correspondant

  // Si l'ID ne correspond à aucun logement
  if (!logement) {
    return <div className="blackColor">Logement introuvable.</div>;
  }

  return (
    <div className="fiche-logement">
      {/* Carrousel d'images */}
      <Gallery images={logement.pictures} />

      {/* Titre, localisation, tags, hôte et note */}
      <div className="logement-header">
        <div className="infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Affichage des tags (ex : "Mer", "Montagne", etc.) */}
          <div className="tags">
            {logement.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        
        {/* Zone de l'hôte (nom + photo) + notation */}
        <div className="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Stars rating={logement.rating} />
        </div>
      </div>

      {/* Sections déroulantes : description et équipements */}
      <div className="collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logements;
