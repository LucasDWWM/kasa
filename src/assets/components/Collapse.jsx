import { useState } from 'react';
import '@/assets/styles/Collapse.scss';

// Composant Collapse : affiche un contenu déroulant (accordion)
function Collapse({ title, children }) {
  const [open, setOpen] = useState(false); // État ouvert ou fermé

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        {/* Flèche fixe ▼ qui ne change pas */}
        <span className="arrow">▼</span>
      </div>

      {/* Affichage du contenu seulement si ouvert */}
      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
