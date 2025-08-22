import { useFetch } from "../hooks/useFetch";
import useLoadingState from "../hooks/useLoadingState";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Hero from "../components/common/Hero";
import ApartmentCard from "../components/cards/ApartmentCard";

/**
 * Composant Home qui affiche la page d'accueil de l'application.
 * Contient une bannière hero et une galerie d'appartements avec gestion du chargement et des erreurs.
 *
 * @component
 * @returns {JSX.Element} La page d'accueil avec hero et galerie d'appartements
 *
 * @example
 * // Utilisation dans le routeur
 * <Route path="/" element={<Home />} />
 *
 * @example
 * // Utilisation directe
 * <Home />
 *
 * @example
 * // Utilisation dans un layout
 * <Layout>
 *   <Home />
 * </Layout>
 */
export default function Home() {
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
    LOADING_MESSAGES.APARTMENTS
  );

  if (isLoading || error) {
    return content;
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
        {apartments && apartments.length > 0 ? (
          apartments.map((apartment) => (
            <ApartmentCard apartment={apartment} key={apartment.id} />
          ))
        ) : (
          <span className="no-available-apartment">
            Aucune propriété disponible
          </span>
        )}
      </section>
    </>
  );
}
