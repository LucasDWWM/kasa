import { Link } from "react-router-dom";
import "@/assets/styles/NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="return-link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;

