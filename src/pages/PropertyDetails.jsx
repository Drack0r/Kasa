import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Slideshow from "../components/Slideshow";
import Loading from "../components/Loading";

export default function PropertyDetails() {
  const { id } = useParams();

  // Fetch des données
  const {
    data: properties,
    loading,
    error,
  } = useFetch(API_ENDPOINTS.PROPERTIES);

  // Gestion du chargement
  if (loading) {
    return <Loading message={LOADING_MESSAGES.PROPERTIES} />;
  }

  // Gestion des erreurs
  if (error) {
    return <div className="error">Erreur : {error}</div>;
  }

  const currentProperty = properties.find((property) => property.id === id);

  // Gestion du cas où la propriété n'existe pas
  if (!currentProperty) {
    return <div className="error">Propriété non trouvée</div>;
  }

  return (
    <>
      {/* Slideshow */}
      <section className="property-details">
        <Slideshow
          images={currentProperty.pictures}
          title={currentProperty.title}
        />

        {/* Temporary */}
        <div className="property__infos">
          <h2 className="property__title">{currentProperty.title}</h2>

          <p className="property__location">{currentProperty.location}</p>

          <p className="property__description">{currentProperty.description}</p>
        </div>
      </section>
    </>
  );
}
