import { NavLink } from "react-router-dom";
import Logo from "@/assets/Images/Logo.png";
import "@/assets/styles/Header.scss";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Kasa logo" className="LogoRouge" />
      <nav>
        {/* Si la className est active alors on l'active sinon on ne fait rien */}
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
        <NavLink to="/aPropos" className={({ isActive }) => isActive ? "active" : ""}>À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
