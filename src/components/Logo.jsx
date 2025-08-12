export default function Logo({ logoTheme }) {
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

  return <img src={logoSrc} alt="Logo de Kasa" className={logoClassName} />;
}
