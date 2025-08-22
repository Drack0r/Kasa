import { Link } from "react-router-dom";

/**
 * Composant ApartmentCard qui affiche une carte d'appartement cliquable.
 * Redirige vers la page de détails de l'appartement au clic.
 *
 * @component
 * @param {Object} apartment - Les données de l'appartement à afficher
 * @param {string} apartment.id - L'identifiant unique de l'appartement
 * @param {string} apartment.title - Le titre/nom de l'appartement
 * @param {string} apartment.cover - L'URL de l'image de couverture de l'appartement
 * @returns {JSX.Element} Un lien contenant une carte d'appartement avec image de fond et titre
 *
 * @example
 * // Utilisation avec un objet appartement
 * const apartment = {
 *   id: "c67ab8a7",
 *   title: "Appartement cosy",
 *   cover: "/images/apartment1.jpg"
 * };
 * <ApartmentCard apartment={apartment} />
 *
 * @example
 * // Utilisation dans une galerie
 * {apartments.map((apartment) => (
 *   <ApartmentCard key={apartment.id} apartment={apartment} />
 * ))}
 */
export default function ApartmentCard({ apartment }) {
  return (
    <Link to={`/apartment/${apartment.id}`} className="gallery__link">
      <article
        className="gallery__card"
        style={{ backgroundImage: `url(${apartment.cover})` }}
      >
        <h3 className="gallery__card-title">{apartment.title}</h3>
      </article>
    </Link>
  );
}
