import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import CopyrightNotice from "../components/CopyrightNotice";
import Loading from "../components/Loading";

export default function PropertyDetails() {
  const { id } = useParams();

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

  const currentProperty = property.find((prop) => prop.id === id);

  // Gestion du cas où la propriété n'existe pas
  if (!currentProperty) {
    return (
      <div className="property-details-page">
        <header className="header">
          <Logo logoTheme={"light"} />
          <Navigation />
        </header>

        <main className="body">
          <div className="error">Propriété non trouvée</div>
        </main>

        <footer className="footer">
          <Logo logoTheme={"dark"} />
          <CopyrightNotice />
        </footer>
      </div>
    );
  }

  return (
    <div className="property-details-page">
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <main className="body">
        <section className="property-details">
          {/* Carrousel avec les images de la propriété */}
          <Slideshow
            images={currentProperty.pictures}
            title={currentProperty.title}
          />

          <div className="property__infos">
            <h2 className="property__title">{currentProperty.title}</h2>
            <p className="property__location">{currentProperty.location}</p>
            <p className="property__description">
              {currentProperty.description}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
