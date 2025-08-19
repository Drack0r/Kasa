import { useFetch } from "../hooks/useFetch";
import useLoadingState from "../hooks/useLoadingState";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Hero from "../components/common/Hero";
import Collapse from "../components/ui/Collapse";

export default function About() {
  // Fetch des données
  const {
    data: collapseData,
    loading,
    error,
  } = useFetch(API_ENDPOINTS.ABOUT_DATA);

  // Gestion du chargement et des erreurs
  const { isLoading, content } = useLoadingState(
    loading,
    error,
    LOADING_MESSAGES.ABOUT
  );

  if (isLoading || error) {
    return content;
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
