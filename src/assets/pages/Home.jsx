import logements from "@/data/logements.json";
import "@/assets/styles/Home.scss";
import { Link } from "react-router-dom";

// Composant Home : page d'accueil avec grille de logements
function Home() {
  return (
    <div className="home">

      {/* Bannière d'en-tête */}
      <section className="banner mobileSizeH1">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      {/* Grille de cartes de logements */}
      <section className="cards-grid">
        {logements.map((logement) => (
          // Chaque carte est un lien vers la page du logement avec son ID
          <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
            {/* Image de couverture du logement et son titre */}
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
