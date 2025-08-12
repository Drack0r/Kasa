import { Link } from "react-router-dom";

export default function GalleryCard({ propertyData }) {
  return (
    <Link to={`/property/${propertyData.id}`} className="gallery__link">
      <article
        className="gallery__card"
        style={{ backgroundImage: `url(${propertyData.cover})` }}
      >
        <h2 className="gallery__card-title">{propertyData.title}</h2>
      </article>
    </Link>
  );
}
