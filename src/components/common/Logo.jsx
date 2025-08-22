/**
 * Composant Logo qui affiche le logo de Kasa avec différents thèmes
 *
 * @component
 * @param {("light"|"dark")} [logoTheme="light"] - Le thème du logo
 * @returns {JSX.Element} Un élément h1 contenant l'image du logo
 * @example
 * // Logo clair pour le header
 * <Logo logoTheme="light" />
 *
 * // Logo sombre pour le footer
 * <Logo logoTheme="dark" />
 */
export default function Logo({ logoTheme = "light" }) {
  const logo = {
    light: "/src/assets/images/logo/logo-light.png",
    dark: "/src/assets/images/logo/logo-dark.png",
  };

  let logoSrc;
  let logoClassName;

  if (logoTheme === "light") {
    logoSrc = logo.light;
    logoClassName = "header__logo";
  } else if (logoTheme === "dark") {
    logoSrc = logo.dark;
    logoClassName = "footer__logo";
  }

  return (
    <h1 className={logoClassName}>
      <img src={logoSrc} alt="Logo de Kasa" />
    </h1>
  );
}
