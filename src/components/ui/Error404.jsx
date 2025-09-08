import { ROUTES } from "../../constants/routes.js";
import { Link } from "react-router-dom";

/**
 * Composant Error404 qui affiche une page d'erreur 404 personnalisée.
 * Affiche un message d'erreur et un lien de retour vers la page d'accueil.
 *
 * @component
 * @returns {JSX.Element} Une section contenant le code d'erreur 404, un message explicatif et un lien de retour
 *
 * @example
 * // Utilisation dans une route 404
 * <Route path="*" element={<Error404 />} />
 *
 * @example
 * // Utilisation conditionnelle
 * {!foundData && <Error404 />}
 *
 * @example
 * // Utilisation directe
 * <Error404 />
 */
export default function Error404() {
  return (
    <section className="error-404">
      <h2 className="error__type">404</h2>

      <p className="error__message">
        Oups! La page que <br className="responsive-br" />
        vous demandez n'existe pas.
      </p>

      <Link to={ROUTES.HOME} className="error__home-link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}
