import { Link } from "react-router-dom";

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
