import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`} className="gallery__link">
      <article
        className="gallery__card"
        style={{ backgroundImage: `url(${property.cover})` }}
      >
        <h3 className="gallery__card-title">{property.title}</h3>
      </article>
    </Link>
  );
}
