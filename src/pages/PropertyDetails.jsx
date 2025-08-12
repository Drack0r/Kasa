import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import CopyrightNotice from "../components/CopyrightNotice";

export default function PropertyDetails() {
  return (
    <>
      <header className="header">
        <Logo logoTheme={"light"} />
        <Navigation />
      </header>

      <footer className="footer">
        <Logo logoTheme={"dark"} />
        <CopyrightNotice />
      </footer>
    </>
  );
}
