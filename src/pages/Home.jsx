import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import CopyrightNotice from "../components/CopyrightNotice";
import Loading from "../components/Loading";
import { LOADING_MESSAGES } from "../constants/messages";

export default function Home() {
  const { data: property, loading, error } = useFetch(API_ENDPOINTS.PROPERTIES);

  // Gestion du chargement
  if (loading) {
    return (
      <div className="homepage">
        <header className="header">
          <Logo logoTheme={"light"} />
          <Navigation />
        </header>

        <main className="body">
          <Loading message={LOADING_MESSAGES.PROPERTIES} />
        </main>
      </div>
    );
  }

  // Gestion des erreurs
  if (error) {
    return (
      <div className="homepage">
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
    <div className="homepage">
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <main className="body">
        <Hero
          textContent={"Chez vous, partout et ailleurs"}
          backgroundImage="/src/assets/images/backgrounds/hero-background-1.jpg"
          isInnerShadowed={true}
          isBoxShadowed={true}
          innerShadowOpacity={0.6}
        />

        <section className="gallery">
          {property && property.length > 0 ? (
            property.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))
          ) : (
            <div>Aucune propriété disponible</div>
          )}
        </section>
      </main>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
