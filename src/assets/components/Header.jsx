import { Link } from "react-router-dom";
import logo from "@/assets/Images/LOGO.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
