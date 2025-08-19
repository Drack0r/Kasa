import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import useLoadingState from "../hooks/useLoadingState";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Slideshow from "../components/Slideshow";

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

        {/* Temporary */}
        <div className="apartment__infos">
          <h2 className="apartment__title">{currentApartment.title}</h2>

          <p className="apartment__location">{currentApartment.location}</p>

          <p className="apartment__description">
            {currentApartment.description}
          </p>
        </div>
      </section>
    </>
  );
}
