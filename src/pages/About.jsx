import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Collapse from "../components/Collapse";
import CopyrightNotice from "../components/CopyrightNotice";
import Loading from "../components/Loading";

export default function About() {
  const {
    data: collapseData,
    loading,
    error,
  } = useFetch(API_ENDPOINTS.COLLAPSE_DATA);

  // Gestion du chargement
  if (loading) {
    return (
      <div className="about-page">
        <header className="header">
          <Logo logoTheme={"light"} />
          <Navigation />
        </header>

        <main className="body">
          <Loading message={LOADING_MESSAGES.ABOUT} />
        </main>
      </div>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <div className="about-page">
        <header className="header">
          <Logo logoTheme={"light"} />
          <Navigation />
        </header>

        <main className="body">
          <div className="error">Erreur : {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="about-page">
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <main className="body">
        <Hero
          textContent={""}
          backgroundImage={
            "/src/assets/images/backgrounds/hero-background-2.jpg"
          }
          isInnerShadowed={true}
          isBoxShadowed={false}
          innerShadowOpacity={0.3}
        />

        <section className="collapse-container">
          {collapseData.map((element) => (
            <Collapse
              key={element.id}
              title={element.title}
              textContent={element.textContent}
            />
          ))}
        </section>
      </main>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
