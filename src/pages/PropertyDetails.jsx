import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { API_ENDPOINTS } from "../config/api";
import { LOADING_MESSAGES } from "../constants/messages";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
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
  if (!property) {
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
        <p>Propriété #{id} :</p>
        <h1>{currentProperty.title}</h1>
      </main>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </div>
  );
}
