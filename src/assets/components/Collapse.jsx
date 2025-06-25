import { useState } from 'react';
import '@/assets/styles/Collapse.scss';
import arrowIcon2 from "@/assets/Images/arrow_back_ios-24px 2.png";

// Composant Collapse : affiche un contenu déroulant (accordion)
function Collapse({ title, children }) {
  const [open, setOpen] = useState(false); // État ouvert ou fermé

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        <img src={arrowIcon2} alt="Flèche" className={open ? "rotate" : ""} />
      </div>

      {/* Affichage du contenu seulement si ouvert */}
      {open && (
        <div className="collapse-content">
          {children}
        </div>)}
    </div>
  );
}

export default Collapse;
