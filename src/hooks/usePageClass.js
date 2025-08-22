import { useLocation } from "react-router-dom";
import { ROUTES, PAGE_CLASSES } from "../constants/routes";

/**
 * Hook personnalisé pour déterminer la classe CSS appropriée selon la route actuelle.
 * Utilise React Router pour récupérer la route et retourne la classe CSS correspondante.
 *
 * @function usePageClass
 * @returns {string} La classe CSS correspondant à la page actuelle
 *
 * @example
 * // Utilisation dans le composant Layout
 * function Layout({ children }) {
 *   const pageClass = usePageClass();
 *
 *   return (
 *     <div className={`page ${pageClass}`}>
 *       <Header />
 *       <main>{children}</main>
 *       <Footer />
 *     </div>
 *   );
 * }
 *
 * @example
 * // Classes retournées selon les routes :
 * // "/" → "page-home"
 * // "/about" → "page-about"
 * // "/apartment/123" → "page-apartment"
 * // "/unknown-route" → "page-not-found"
 *
 * @example
 * // Utilisation pour appliquer des styles spécifiques
 * const pageClass = usePageClass();
 *
 * return (
 *   <div className={`container ${pageClass}`}>
 *     { Contenu avec styles conditionnels }
 *   </div>
 * );
 *
 * @since 1.0.0
 */
export default function usePageClass() {
  const location = useLocation();

  /**
   * Fonction interne pour déterminer la classe CSS selon le pathname
   * @param {string} pathname - Le chemin de la route actuelle
   * @returns {string} La classe CSS correspondante
   */
  const getPageClass = (pathname) => {
    switch (pathname) {
      case ROUTES.HOME:
        return PAGE_CLASSES.HOME;
      case ROUTES.ABOUT:
        return PAGE_CLASSES.ABOUT;
      default:
        if (pathname.startsWith(ROUTES.APARTMENT_PREFIX)) {
          return PAGE_CLASSES.APARTMENT;
        }
        return PAGE_CLASSES.NOT_FOUND;
    }
  };

  return getPageClass(location.pathname);
}
