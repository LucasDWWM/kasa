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
          <Link to={`/logement/${logement.id}`} key={logement.id} className="card">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;
