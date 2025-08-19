import { useState } from "react";

export default function Slideshow({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si une seule image, pas besoin de navigation
  const showNavigation = images && images.length > 1;

  // Fonction pour gérer la navigation
  const navigate = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      } else if (direction === "prev") {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      }
    });
  };

  // Gestion du cas où il n'y a pas d'images
  if (!images || images.length === 0) {
    return (
      <article className="slideshow">
        <div className="slideshow__no-image">Aucune image disponible</div>
      </article>
    );
  }

  return (
    <article className="slideshow">
      {/* Image principale */}
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {/* Boutons de navigation */}
      {showNavigation && (
        <div className="slideshow__buttons-container">
          <button
            className="slideshow__button slideshow__button--prev"
            onClick={() => navigate("prev")}
          >
            <img
              src="/src/assets/images/icons/chevron-left.png"
              alt="Précédent"
            />
          </button>

          <button
            className="slideshow__button slideshow__button--next"
            onClick={() => navigate("next")}
          >
            <img
              src="/src/assets/images/icons/chevron-right.png"
              alt="Suivant"
            />
          </button>
        </div>
      )}

      {/* Indicateur de position */}
      {showNavigation && (
        <span className="slideshow__infos">
          {currentIndex + 1}/{images.length}
        </span>
      )}
    </article>
  );
}
