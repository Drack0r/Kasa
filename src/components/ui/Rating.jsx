/**
 * Composant Rating qui affiche une évaluation sous forme d'étoiles.
 * Affiche des étoiles pleines et vides selon la note fournie.
 *
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {number|string} [props.rating=0] - La note à afficher (entre 0 et 5)
 * @returns {JSX.Element} Un div contenant les étoiles de notation
 *
 * @example
 * // Utilisation avec une note de 3
 * <Rating rating={3} />
 *
 * @example
 * // Utilisation avec une note sous forme de chaîne
 * <Rating rating="4" />
 *
 * @example
 * // Utilisation avec des données d'appartement
 * <Rating rating={currentApartment.rating} />
 *
 * @example
 * // Utilisation sans props (note par défaut de 0)
 * <Rating />
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
