/**
 * Composant Loading qui affiche un indicateur de chargement avec message personnalisable.
 * Affiche un spinner animé accompagné d'un message informatif.
 *
 * @component
 * @param {string} [message="Chargement en cours..."] - Le message à afficher pendant le chargement
 * @returns {JSX.Element} Un conteneur avec un spinner de chargement et un message
 *
 * @example
 * // Utilisation avec le message par défaut
 * <Loading />
 *
 * @example
 * // Utilisation avec un message personnalisé
 * <Loading message="Chargement des appartements..." />
 *
 * @example
 * // Utilisation conditionnelle
 * {isLoading && <Loading message="Récupération des données..." />}
 */
export default function Loading({ message = "Chargement en cours..." }) {
  return (
    <div className="loading">
      <span className="loader"></span>
      <p className="loading__message">{message}</p>
    </div>
  );
}
