import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import useLoadingState from "../hooks/useLoadingState";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Slideshow from "../components/common/Slideshow";
import Collapse from "../components/ui/Collapse";
import Tag from "../components/ui/Tag";
import Owner from "../components/ui/Owner";
import Rating from "../components/ui/Rating";

export default function ApartmentDetails() {
  const { id } = useParams();

  // Fetch des données
  const {
    data: apartments,
    loading,
    error,
  } = useFetch(API_ENDPOINTS.APARTMENTS);

  // Gestion du chargement et des erreurs
  const { isLoading, content } = useLoadingState(
    loading,
    error,
    LOADING_MESSAGES.APARTMENT
  );

  if (isLoading || error) {
    return content;
  }

  const currentApartment = apartments.find((apartment) => apartment.id === id);

  // Redirection vers la page 404 si l'appartement n'existe pas
  if (!currentApartment) {
    return <Navigate to="/404" replace />;
  }

  // Gestion du cas où la propriété n'existe pas
  if (!currentApartment) {
    return <div className="error">Propriété non trouvée</div>;
  }

  return (
    <>
      {/* Slideshow */}
      <section className="apartment-details">
        <Slideshow
          images={currentApartment.pictures}
          title={currentApartment.title}
        />

        <div className="apartment__description">
          {/* Infos */}
          <div className="apartment__infos">
            <h2 className="apartment__title">{currentApartment.title}</h2>
            <p className="apartment__location">{currentApartment.location}</p>
          </div>

          {/* Tags */}
          <div className="apartment__tags-container">
            {currentApartment.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>

          {/* Owner et Rating */}
          <div className="apartment__owner-rating">
            <Owner
              name={currentApartment.host.name}
              avatar={currentApartment.host.picture}
            />

            <Rating rating={currentApartment.rating} />
          </div>

          {/* Collapse */}
          <div className="apartment__collapse-container">
            <Collapse
              title="Description"
              textContent={currentApartment.description}
            />

            <Collapse
              title="Équipements"
              textContent={currentApartment.equipments}
            />
          </div>
        </div>
      </section>
    </>
  );
}
