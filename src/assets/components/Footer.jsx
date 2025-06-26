import '@/assets/styles/Footer.scss';
import logo from "@/assets/Images/LOGO_blanc.png";

function Footer() {
  return (
    <footer className="footer footer-logement">
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
