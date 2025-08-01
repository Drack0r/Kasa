import { NavLink } from "react-router-dom";

function HeaderLogo() {
  return (
    <img
      src="/src/assets/images/header-logo.png"
      alt="Logo de Kasa"
      className="header__logo"
    />
  );
}

function HeaderNav() {
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

export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}
