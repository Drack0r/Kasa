/**
 * Composant Owner qui affiche les informations du propriétaire d'un appartement.
 * Affiche le nom et l'avatar du propriétaire dans un format horizontal.
 *
 * @component
 * @param {string} name - Le nom complet du propriétaire
 * @param {string} avatar - L'URL de l'image avatar du propriétaire
 * @returns {JSX.Element} Un div contenant le nom et l'avatar du propriétaire
 *
 * @example
 * // Utilisation simple
 * <Owner
 *   name="John Doe"
 *   avatar="/images/avatar-john.jpg"
 * />
 *
 * @example
 * // Utilisation avec des données d'appartement
 * <Owner
 *   name={currentApartment.host.name}
 *   avatar={currentApartment.host.picture}
 * />
 *
 * @example
 * // Utilisation avec nom composé
 * <Owner
 *   name="Marie-Claire Dubois"
 *   avatar="/images/avatar-marie.jpg"
 * />
 */
export default function Rating({ rating = 0 }) {
  const maxStars = 5;
  const numericRating = parseInt(rating);

  return (
    <div className="apartment__rating">
      {Array.from({ length: maxStars }, (_, index) => {
        const isFilled = index < numericRating;

        return (
          <div
            key={`star-${rating}-${index}`}
            className={`rating__star ${
              isFilled ? "rating__star--filled" : "rating__star--empty"
            }`}
          >
            <img
              src={
                isFilled
                  ? "/src/assets/images/icons/rating-star-filled.png"
                  : "/src/assets/images/icons/rating-star-empty.png"
              }
              alt={isFilled ? "Étoile remplie" : "Étoile vide"}
            />
          </div>
        );
      })}
    </div>
  );
}
