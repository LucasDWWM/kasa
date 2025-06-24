import { useState } from "react";
import arrowIcon from "@/assets/Images/arrow_back_ios-24px 2.png";
import "@/assets/styles/Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img src={arrowIcon} alt="Flèche" className={isOpen ? "rotate" : ""} />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
