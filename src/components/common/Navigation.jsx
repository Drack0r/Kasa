import { NavLink } from "react-router-dom";

/**
 * Composant Navigation pour naviguer entre les pages principales de l'application.
 * Affiche les liens de navigation dans l'en-tête.
 *
 * @component
 * @returns {JSX.Element} La barre de navigation principale
 * @example
 * // Utilisation dans un header :
 * <Navigation />
 */
export default function Navigation() {
  const navLinkClass = ({ isActive }) =>
    `header__nav-link ${isActive ? "header__nav-link--active" : ""}`;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink to="/" className={navLinkClass}>
            Accueil
          </NavLink>
        </li>

        <li className="header__nav-item">
          <NavLink to="/about" className={navLinkClass}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
