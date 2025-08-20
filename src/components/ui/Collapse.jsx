import { useState } from "react";

export default function Collapse({ title = "Titre", textContent = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Rendre le contenu selon son type
  const renderContent = () => {
    if (Array.isArray(textContent)) {
      return (
        <ul className="collapse__list">
          {textContent.map((item, index) => (
            <li key={index} className="collapse__list-item">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="collapse__text">{textContent}</p>;
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
        {renderContent()}
      </div>
    </article>
  );
}
