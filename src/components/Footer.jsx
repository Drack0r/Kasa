function FooterLogo() {
  return (
    <img
      src="/src/assets/images/footer-logo.png"
      alt="Logo de Kasa"
      className="footer__logo"
    />
  );
}

function CopyrightNotice() {
  return (
    <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <FooterLogo />
      <CopyrightNotice />
    </footer>
  );
}
