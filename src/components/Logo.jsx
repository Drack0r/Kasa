export default function Logo({ logoTheme }) {
  const logoLightSrc = "/src/assets/images/logo/logo-light.png";
  const logoDarkSrc = "/src/assets/images/logo/logo-dark.png";

  let logoSrc;
  let logoClassName;

  if (logoTheme === "light") {
    logoSrc = logoLightSrc;
    logoClassName = "header__logo";
  } else if (logoTheme === "dark") {
    logoSrc = logoDarkSrc;
    logoClassName = "footer__logo";
  }

  return <img src={logoSrc} alt="Logo de Kasa" className={logoClassName} />;
}
