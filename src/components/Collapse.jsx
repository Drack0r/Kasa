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
          <img
            src="/src/assets/images/icons/chevron-up.png"
            alt={`Icône de chevron ${isOpen ? "ouvert" : "fermé"}`}
            className={`collapse__icon ${
              isOpen ? "collapse__icon--rotated" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`collapse__text-container ${
          isOpen ? "collapse__text-container--open" : ""
        }`}
      >
        <p className="collapse__text">{textContent}</p>
      </div>
    </article>
  );
}
