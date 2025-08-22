/**
 * Composant Tag qui affiche un badge/étiquette avec du texte.
 * Utilisé pour afficher les tags/catégories des appartements.
 *
 * @component
 * @param {string} title - Le texte à afficher dans le tag
 * @returns {JSX.Element} Un élément div contenant le texte du tag
 *
 * @example
 * // Utilisation simple
 * <Tag title="Montmartre" />
 *
 * @example
 * // Utilisation avec des données d'appartement
 * {currentApartment.tags.map((tag) => (
 *   <Tag key={tag} title={tag} />
 * ))}
 *
 * @example
 * // Utilisation avec différents types de tags
 * <Tag title="Luxe" />
 * <Tag title="Centre-ville" />
 * <Tag title="Vue mer" />
 */
export default function Tag({ title }) {
  return <div className="tag">{title}</div>;
}
