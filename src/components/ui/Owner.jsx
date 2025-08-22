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
export default function Owner({ name, avatar }) {
  return (
    <div className="apartment__owner">
      <span className="owner__name">{name}</span>
      <img
        src={avatar}
        alt="Avatar du propriétaire"
        className="owner__avatar"
      />
    </div>
  );
}
