import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Hero from "../components/Hero";
import Collapse from "../components/Collapse";
import Loading from "../components/Loading";

export default function About() {
  // Fetch des données
  const {
    data: collapseData,
    loading,
    error,
  } = useFetch(API_ENDPOINTS.ABOUT_PAGE_DATA);

  // Gestion du chargement
  if (loading) {
    return <Loading message={LOADING_MESSAGES.ABOUT} />;
  }

  // Gestion des erreurs
  if (error) {
    return <div className="error">Erreur : {error}</div>;
  }

  return (
    <>
      {/* Hero */}
      <Hero
        textContent={""}
        backgroundImage={"/src/assets/images/backgrounds/hero-background-2.jpg"}
        isInnerShadowed={true}
        isBoxShadowed={false}
        innerShadowOpacity={0.3}
      />

      {/* Collapse */}
      <section className="collapse-container">
        {collapseData.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            textContent={collapse.textContent}
          />
        ))}
      </section>
    </>
  );
}
