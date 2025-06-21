import logements from "@/data/logements.json";
import "@/assets/styles/Home.scss";

function Logements() {
  return (
    <div className="home">

      {/* Bannière */}
      <section className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      {/* Grille de logements */}
      <section className="cards-grid">
        {logements.map((logement) => (
          <div key={logement.id} className="card">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Logements;
