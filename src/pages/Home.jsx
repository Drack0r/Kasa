import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import Loading from "../components/Loading";

export default function Home() {
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

  return (
    <>
      {/* Hero */}
      <Hero
        textContent={"Chez vous, partout et ailleurs"}
        backgroundImage="/src/assets/images/backgrounds/hero-background-1.jpg"
        isInnerShadowed={true}
        isBoxShadowed={true}
        innerShadowOpacity={0.6}
      />

      {/* Gallery */}
      <section className="gallery">
        {properties && properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))
        ) : (
          <span className="no-available-property">
            Aucune propriété disponible
          </span>
        )}
      </section>
    </>
  );
}
