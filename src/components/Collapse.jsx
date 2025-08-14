import { useState } from "react";

export default function Collapse({ title, textContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="collapse">
      <div className="collapse__top-bar">
        <h2 className="collapse__title">{title}</h2>

        <button className="collapse__btn" onClick={handleClick}>
          <i
            className={`fa-solid fa-chevron-up 
              ${isOpen ? "collapse__icon--rotated" : ""}`}
          ></i>
        </button>
      </div>

      {isOpen && (
        <div className="collapse__text-container">
          <p className="collapse__text">{textContent}</p>
        </div>
      )}
    </article>
  );
}
