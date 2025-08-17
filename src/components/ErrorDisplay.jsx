import { Link } from "react-router-dom";

export default function ErrorDisplay() {
  return (
    <section className="error-display">
      <h2 className="error__type">404</h2>

      <p className="error__message">
        Oups! La page que <br className="responsive-br" />
        vous demandez n'existe pas.
      </p>

      <Link to="/" className="error__home-link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}
