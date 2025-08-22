import { useState } from "react";

/**
 * Composant Collapse qui affiche un contenu pliable/dépliable avec titre et contenu.
 * Gère automatiquement l'affichage selon le type de contenu (texte ou liste).
 *
 * @component
 * @param {string} [title="Titre"] - Le titre affiché dans la barre de navigation
 * @param {string|string[]} [textContent=""] - Le contenu à afficher (texte simple ou tableau pour une liste)
 * @returns {JSX.Element} Un article contenant une section pliable avec titre et contenu
 *
 * @example
 * // Utilisation avec du texte simple
 * <Collapse
 *   title="Description"
 *   textContent="Voici la description de l'appartement..."
 * />
 *
 * @example
 * // Utilisation avec une liste d'équipements
 * <Collapse
 *   title="Équipements"
 *   textContent={["WiFi", "Climatisation", "Machine à laver", "Télévision"]}
 * />
 *
 * @example
 * // Utilisation avec valeurs par défaut
 * <Collapse />
 *
 * @example
 * // Utilisation avec données d'appartement
 * <Collapse
 *   title="Description"
 *   textContent={currentApartment.description}
 * />
 * <Collapse
 *   title="Équipements"
 *   textContent={currentApartment.equipments}
 * />
 */
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
          {textContent.map((item) => (
            <li key={item} className="collapse__list-item">
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
