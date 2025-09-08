import { ROUTES } from "../constants/routes.js";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/ui/Loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ApartmentDetails = lazy(() => import("../pages/ApartmentDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

/**
 * Composant Router qui gère le routage principal de l'application.
 * Utilise le lazy loading pour optimiser les performances et un Suspense pour gérer le chargement.
 *
 * @component
 * @returns {JSX.Element} Le système de routage complet avec lazy loading et fallback
 *
 * @example
 * // Utilisation dans App.jsx
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <Layout>
 *         <Router />
 *       </Layout>
 *     </BrowserRouter>
 *   );
 * }
 *
 * @example
 * // Routes disponibles :
 * // "/" - Page d'accueil (Home)
 * // "/about" - Page à propos (About)
 * // "/apartment/:id" - Détails d'appartement (ApartmentDetails)
 * // "*" - Page 404 pour toutes les autres routes (NotFound)
 *
 * @example
 * // Utilisation directe (nécessite BrowserRouter parent)
 * <Router />
 */
export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route
          path={`${ROUTES.APARTMENT_PREFIX}:id`}
          element={<ApartmentDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
